import { Grid } from "@material-ui/core";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tfc from "@tensorflow/tfjs-core";
import React, { useEffect, useState } from "react";

import { Camera, CameraDimensions, VIDEO_PIXELS } from "./Camera";
import ReportDataPopup from "../../ReportData";

const CameraView = (props: { openToastMessage: any }) => {
  const [prediction, setPrediction] = useState({
    itemName: "detecting...",
    bin: "unknown"
  });
  const [cameraStarted, setCameraStarted] = useState(false);

  let debounceFunc: any;
  let previous: string | undefined;
  let timer: any;

  const debounce = (func: any, delay: number) => {
    return function(this: any) {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const setPredictionHelper = (binInfo: { itemName: string; bin: string }) => {
    setPrediction(binInfo);
    if (binInfo.itemName.includes("bottle")) {
      props.openToastMessage();
    }
  };

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
      model.classify(pixelsCropped).then((predictions: any) => {
        const className =
          predictions[0] && ((predictions[0] as any).className as string);
        const bin = getBinResult(className);
        const itemName = className.split(",")[0];
        if (!debounceFunc) {
          debounceFunc = debounce((updatedInfo: any) => {
            setPredictionHelper(updatedInfo);
          }, 300);
        }
        if (predictions[0].probability > 0.7) {
          clearTimeout(timer);
          setPredictionHelper({ itemName, bin });
        } else if (previous && itemName !== previous) {
          if (predictions[0].probability > 0.6) {
            debounceFunc({ itemName, bin });
          } else {
            setPredictionHelper({
              itemName: "detecting...",
              bin: "unknown"
            });
          }
        }
        previous = itemName;
      });
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

  const getBinResult = (className: string): string => {
    if (className.includes("orange")) {
      return "Compost";
    }
    if (
      className.includes("bottle") ||
      className.includes("jug") ||
      className.includes("iPod") ||
      className.includes("cellphone")
    ) {
      return "Recycle";
    }
    return "Landfill";
  };

  // TODO: Need to make sure to clean up on unmount
  useEffect(() => {
    if (!cameraStarted) {
      startCamera();
      setCameraStarted(true);
    }
  }, [cameraStarted, startCamera]);

  return (
    <Grid
      item
      container
      direction="column"
      className="Camera-View Utils-Spacing Utils-Flex"
    >
      <Grid item className="Utils-Flex">
        <div className="Utils-Height">
          <video className="Camera Utils-Flex" autoPlay playsInline></video>
        </div>
      </Grid>
      <Grid item>
        <ReportDataPopup itemName={prediction.itemName} bin={prediction.bin} />
      </Grid>
    </Grid>
  );
};

export default CameraView;
