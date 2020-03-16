import { Grid } from "@material-ui/core";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tfc from "@tensorflow/tfjs-core";
import React, { useEffect, useState } from "react";

import { Camera, CameraDimensions, VIDEO_PIXELS } from "./Camera";

const CameraView = () => {
  const [predictions, setPredictions] = useState([]);
  const [cameraStarted, setCameraStarted] = useState(false);

  const predict = async (model: any, camera: any) => {
    tfc.tidy(() => {
      const pixels = tfc.browser.fromPixels(camera.videoElement);
      const centerHeight = pixels.shape[0] / 2;
      const beginHeight = centerHeight - VIDEO_PIXELS / 2;
      const centerWidth = pixels.shape[1] / 2;
      const beginWidth = centerWidth - VIDEO_PIXELS / 2;
      const pixelsCropped = pixels.slice(
        [beginHeight, beginWidth, 0],
        [VIDEO_PIXELS, VIDEO_PIXELS, 3]
      );
      model
        .classify(pixelsCropped)
        .then((predictions: any) => setPredictions(predictions));
    });
    requestAnimationFrame(() => predict(model, camera));
  };

  const startCamera = async () => {
    const camera = new Camera();
    const model = await mobilenet.load();
    const value: CameraDimensions | null = await camera.setupCamera();
    if (value) {
      camera.setupVideoDimensions(value[0], value[1]);
      predict(model, camera);
    } else {
      throw new Error("Failed to set up camera!");
    }
  };

  // TODO: Need to make sure to clean up on unmount
  useEffect(() => {
    if (!cameraStarted) {
      startCamera();
      setCameraStarted(true);
    }
  });

  return (
    <Grid
      item
      container
      direction="column"
      className="Camera-View Utils-Spacing"
    >
      <Grid item>
        <p>
          {predictions[0] && (predictions[0] as any).className} (
          <span className="Bin-Landfill">Landfill</span>)
        </p>
      </Grid>
      <Grid item>
        <div>
          <video className="Camera" autoPlay playsInline></video>
        </div>
      </Grid>
    </Grid>
  );
};

export default CameraView;
