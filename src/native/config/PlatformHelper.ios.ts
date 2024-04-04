import { BaseItemAnimator, RecyclerListViewProps  } from "recyclerlistview";
import { Platform, ScrollViewProps } from "react-native";
import {BidirectionalScrollView} from "../../BiDirectionalScrollView";
import React from "react";

const PlatformConfig = {
  defaultDrawDistance: 250,
  invertedTransformStyle: { transform: [{ scaleY: -1 }] },
  invertedTransformStyleHorizontal: { transform: [{ scaleX: -1 }] },
};
const getCellContainerPlatformStyles = (
  inverted: boolean,
  parentProps: { x: number; y: number; isHorizontal?: boolean }
): { transform: string; WebkitTransform: string } | undefined => {
  return undefined;
};

const getItemAnimator = (): BaseItemAnimator | undefined => {
  return undefined;
};

const getFooterContainer = (): React.ComponentClass | undefined => {
  return undefined;
};

const getBidirectionalScrollView = (
    experimentalScrollPositionManagement: boolean,
    renderScrollComponent:
        | React.FC<ScrollViewProps>
        | React.ComponentType<ScrollViewProps>
        | undefined
) => {
  return experimentalScrollPositionManagement && Platform.OS === "android"
      ? (BidirectionalScrollView as unknown as RecyclerListViewProps["externalScrollView"])
      : (renderScrollComponent as unknown as RecyclerListViewProps["externalScrollView"]);
};
export {
  PlatformConfig,
  getCellContainerPlatformStyles,
  getItemAnimator,
  getFooterContainer,
  getBidirectionalScrollView
};
