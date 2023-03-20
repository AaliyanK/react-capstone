import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Graph = ({ graphData }) => {
  const fullData = [
    "6.06e+09",
    "6.60e+09",
    "7.19e+09",
    "7.83e+09",
    "8.52e+09",
    "9.27e+09",
    "1.01e+10",
    "1.10e+10",
    "1.19e+10",
    "1.29e+10",
    "1.40e+10",
    "1.52e+10",
    "1.65e+10",
    "1.78e+10",
    "1.93e+10",
    "2.08e+10",
    "2.24e+10",
    "2.41e+10",
    "2.58e+10",
    "2.76e+10",
    "2.94e+10",
    "3.12e+10",
    "3.30e+10",
    "3.48e+10",
    "3.66e+10",
    "3.82e+10",
    "3.98e+10",
    "4.13e+10",
    "4.26e+10",
    "4.39e+10",
    "4.50e+10",
    "4.60e+10",
    "4.68e+10",
    "4.76e+10",
    "4.83e+10",
    "4.89e+10",
    "4.94e+10",
    "4.98e+10",
    "5.02e+10",
    "5.05e+10",
    "5.08e+10",
    "5.11e+10",
    "5.13e+10",
    "5.14e+10",
    "5.16e+10",
    "5.17e+10",
    "5.18e+10",
    "5.19e+10",
    "5.20e+10",
    "5.20e+10",
    "5.21e+10",
    "5.21e+10",
    "5.22e+10",
    "5.22e+10",
    "5.22e+10",
    "5.22e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.23e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
    "5.24e+10",
  ];
  const time = [
    "2:01:09 PM",
    "2:01:52 PM",
    "2:02:29 PM",
    "2:03:05 PM",
    "2:03:42 PM",
    "2:04:19 PM",
    "2:04:55 PM",
    "2:05:31 PM",
    "2:06:07 PM",
    "2:06:43 PM",
    "2:07:18 PM",
    "2:07:51 PM",
    "2:08:26 PM",
    "2:09:02 PM",
    "2:09:37 PM",
    "2:10:12 PM",
    "2:10:47 PM",
    "2:11:22 PM",
    "2:12:01 PM",
    "2:12:39 PM",
    "2:13:15 PM",
    "2:13:50 PM",
    "2:14:25 PM",
    "2:15:00 PM",
    "2:15:37 PM",
    "2:16:12 PM",
    "2:16:48 PM",
    "2:17:23 PM",
    "2:17:58 PM",
    "2:18:34 PM",
    "2:19:09 PM",
    "2:19:45 PM",
    "2:20:20 PM",
    "2:20:55 PM",
    "2:21:30 PM",
    "2:22:05 PM",
    "2:22:41 PM",
    "2:23:18 PM",
    "2:23:54 PM",
    "2:24:30 PM",
    "2:25:06 PM",
    "2:25:43 PM",
    "2:26:19 PM",
    "2:26:57 PM",
    "2:27:33 PM",
    "2:28:09 PM",
    "2:28:46 PM",
    "2:29:20 PM",
    "2:29:56 PM",
    "2:30:33 PM",
    "2:31:07 PM",
    "2:31:41 PM",
    "2:32:17 PM",
    "2:32:54 PM",
    "2:33:29 PM",
    "2:34:05 PM",
    "2:34:40 PM",
    "2:35:14 PM",
    "2:35:48 PM",
    "2:36:24 PM",
    "2:36:59 PM",
    "2:37:34 PM",
    "2:38:09 PM",
    "2:38:46 PM",
    "2:39:23 PM",
    "2:39:58 PM",
    "2:40:36 PM",
    "2:41:12 PM",
    "2:41:48 PM",
    "2:42:25 PM",
    "2:43:00 PM",
    "2:43:36 PM",
    "2:44:13 PM",
    "2:44:51 PM",
    "2:45:27 PM",
    "2:46:04 PM",
    "2:46:41 PM",
    "2:47:15 PM",
    "2:47:55 PM",
    "2:48:32 PM",
    "2:50:05 PM",
    "2:50:40 PM",
    "2:51:16 PM",
    "2:51:49 PM",
    "2:52:23 PM",
    "2:52:57 PM",
    "2:53:34 PM",
    "2:54:09 PM",
    "2:54:46 PM",
    "2:55:22 PM",
    "2:55:53 PM",
    "2:56:30 PM",
    "2:57:05 PM",
    "2:57:41 PM",
    "2:58:14 PM",
    "2:58:50 PM",
    "2:59:25 PM",
    "3:00:05 PM",
    "3:00:40 PM",
    "3:01:15 PM",
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(100);
  const [displayData, setDisplayData] = useState(
    fullData.slice(startIndex, endIndex)
  );
  const [displayTime, setDisplayTime] = useState(
    time.slice(startIndex, endIndex)
  );

  useEffect(() => {
    const chart = ApexCharts.getChartByID("mainChart");
    // chart.hideSeries("Air Temperature");
    chart.hideSeries("Inlet Temperature");
    chart.hideSeries("Flow Meter");
    chart.hideSeries("Current_1");
    chart.hideSeries("Current_2");
    chart.hideSeries("Current_3");
    chart.hideSeries("Total Flowrate");
    chart.hideSeries("Moving Average");
    chart.hideSeries("Growth State");
  }, [graphData]);

  const handleNext = () => {
    if (endIndex < fullData.length) {
      setDisplayData(fullData.slice(startIndex + 100, endIndex + 100));
      setDisplayTime(time.slice(startIndex + 100, endIndex + 100));
      setStartIndex(startIndex + 100);
      setEndIndex(endIndex + 100);
    }
  };

  const handleBack = () => {
    if (startIndex !== 0) {
      setDisplayData(fullData.slice(startIndex - 100, endIndex - 100));
      setDisplayTime(time.slice(startIndex - 100, endIndex - 100));
      setStartIndex(startIndex - 100);
      setEndIndex(endIndex - 100);
    }
  };

  return (
    <GraphWrapper>
      <Button onClick={() => handleBack()}>Previous Data</Button>
      <Chart
        type="line"
        height={650}
        width={900}
        series={[
          {
            name: "Cell Density (cells/Liter)",
            data: displayData,
          },
          {
            name: "Inlet Temperature",
            data: graphData?.map((data) => data[3]),
          },
          {
            name: "Flow Meter",
            data: graphData?.map((data) => data[4]),
          },
          {
            name: "Current_1",
            data: graphData?.map((data) => data[5]),
          },
          {
            name: "Current_2",
            data: graphData?.map((data) => data[6]),
          },
          {
            name: "Current_3",
            data: graphData?.map((data) => data[7]),
          },
          {
            name: "Total Flowrate",
            data: graphData?.map((data) => data[8]),
          },
          {
            name: "Moving Average",
            data: graphData?.map((data) => data[9]),
          },
          {
            name: "Growth State",
            data: graphData?.map((data) => data[10]),
          },
        ]}
        options={{
          chart: {
            id: "mainChart",
            animations: {
              enabled: true,
              easing: "linear",
              dynamicAnimation: {
                enabled: true,
                speed: 1000,
              },
            },
            toolbar: {
              show: true,
              export: {
                csv: {
                  headerCategory: "Time",
                  headerValue: "Cell Density",
                },
              },
            },
            zoom: {
              enabled: true,
            },
          },
          title: {
            text: "Cell Density vs Time",
            align: "center",
          },
          stroke: { width: 2, curve: "smooth" },
          xaxis: {
            tickAmount: 20,
            categories: displayTime,
            labels: {
              show: true,
              hideOverlappingLabels: true,
            },
            title: {
              text: "Time",
            },
          },
          legend: {
            showForSingleSeries: true,
            show: true,
          },
          yaxis: {
            show: true,
            title: {
              text: "Cell Density",
            },
          },
        }}
      />
      <Button onClick={() => handleNext()}>Next Data</Button>
    </GraphWrapper>
  );
};

// So im working on the test site right now, im loading in the data and I added this functionality where the user can view 100 points at a time, cuz any more points just crashes it
// 10 seconds load in a new for visual purposes.
// take every 10th point, points in between dont matter
// Change yaxis numbers to scientific notation

export default Graph;
