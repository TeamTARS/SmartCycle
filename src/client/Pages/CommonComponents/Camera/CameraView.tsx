import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tfc from "@tensorflow/tfjs-core";
import React, { useEffect, useState } from "react";

import { Camera, CameraDimensions, VIDEO_PIXELS } from "./Camera";

const CameraView = () => {
  const [predictions, setPredictions] = useState([]);

  const predict = async (model: any, camera: any) => {
    const predictionsPromise = tfc.tidy(() => {
      const pixels = tfc.browser.fromPixels(camera.videoElement);
      const centerHeight = pixels.shape[0] / 2;
      const beginHeight = centerHeight - VIDEO_PIXELS / 2;
      const centerWidth = pixels.shape[1] / 2;
      const beginWidth = centerWidth - VIDEO_PIXELS / 2;
      const pixelsCropped = pixels.slice(
        [beginHeight, beginWidth, 0],
        [VIDEO_PIXELS, VIDEO_PIXELS, 3]
      );
      return model.classify(pixelsCropped);
    });
    const predictions = await predictionsPromise;
    setPredictions(predictions);
    console.log("Predictions: ");
    console.log(predictions);
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

  useEffect(() => {
    startCamera();
  });

  return (
    <div>
      {/*This is temporary UI for testing*/}
      <p>ItemName: {predictions[0] && (predictions[0] as any).className}</p>
      <p>
        probability: {predictions[0] && (predictions[0] as any).probability}
      </p>
      <p>Trash bin: Compost</p>
      <video className="Camera" autoPlay playsInline></video>
    </div>
  );
};

export default CameraView;
