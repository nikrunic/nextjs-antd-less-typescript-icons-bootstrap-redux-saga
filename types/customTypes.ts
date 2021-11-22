import { ComponentType, FC } from "react";

export type NextPageWithProps = FC & {
    mainLayout?: ComponentType;
    childLayout?: ComponentType;
  }