"use client";

import { useRef } from "react";
import { AssetShow } from "@/components/AssetShow";
import { ChartComponent, ChartComponentRef } from "@/components/ChartComponent";
import { Asset } from "@/models";

export function AssetChartComponent(props: { asset: Asset }) {
  const chartRef = useRef<ChartComponentRef>(null);
  return (
    <ChartComponent ref={chartRef} header={<AssetShow asset={props.asset} />} />
  );
}
