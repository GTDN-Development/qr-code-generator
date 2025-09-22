"use client";

import { useState, useRef } from "react";
import { useQRCode } from "next-qrcode";
import { Input } from "./input";
import { Button } from "./button";
import { DownloadIcon } from "lucide-react";

export function GenerateQRCode() {
  const [inputText, setInputText] = useState("");
  const [qrText, setQrText] = useState("");
  const { Image, SVG } = useQRCode();
  const svgRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  function handleGenerateQR() {
    if (inputText.trim()) {
      setQrText(inputText.trim());
    }
  }

  function handleClear() {
    setInputText("");
    setQrText("");
  }

  function handleDownloadSVG() {
    if (!qrText || !svgRef.current) return;

    const svgElement = svgRef.current.querySelector("svg");
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.svg";
    link.click();

    URL.revokeObjectURL(url);
  }

  function handleDownloadPNG() {
    if (!qrText || !imageContainerRef.current) return;

    const imgElement = imageContainerRef.current.querySelector("img");
    if (!imgElement) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 200;
    ctx.drawImage(imgElement, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) return;

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qr-code.png";
      link.click();

      URL.revokeObjectURL(url);
    }, "image/png");
  }

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <div className="flex w-full gap-2">
        <Input
          type="text"
          placeholder="Enter text or URL"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1"
        />
        <Button variant="primary" size="md" onClick={handleGenerateQR}>
          Generate
        </Button>
      </div>

      {qrText && (
        <>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div ref={svgRef} className="hidden">
              <SVG
                text={qrText}
                options={{
                  width: 200,
                  margin: 2,
                  color: {
                    dark: "#000000",
                    light: "#FFFFFF",
                  },
                }}
              />
            </div>
            <div ref={imageContainerRef}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                text={qrText}
                options={{
                  type: "image/png",
                  quality: 1,
                  width: 200,
                  margin: 2,
                  color: {
                    dark: "#000000",
                    light: "#FFFFFF",
                  },
                }}
              />
            </div>
          </div>

          <div className="flex w-full gap-3">
            <Button
              variant="secondary"
              size="md"
              onClick={handleDownloadSVG}
              disabled={!qrText}
              className="flex-1"
            >
              <DownloadIcon aria-hidden="true" />
              Download SVG
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleDownloadPNG}
              disabled={!qrText}
              className="flex-1"
            >
              <DownloadIcon aria-hidden="true" />
              Download PNG
            </Button>
          </div>

          <Button variant="secondary" size="md" onClick={handleClear} className="w-full">
            Clear
          </Button>
        </>
      )}
    </div>
  );
}
