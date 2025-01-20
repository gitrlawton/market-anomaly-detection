"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InfoIcon } from "lucide-react";

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="text-neutral-400 hover:text-neutral-500 transition-colors"
          aria-label="About Market Anomaly Detector"
        >
          <InfoIcon className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] max-h-[600px] bg-gray-800 text-gray-200 p-0">
        <DialogHeader>
          <DialogTitle className="mb-10">{}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] w-full px-6 pb-6" type="always">
          <div className="py-4">
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Market Anomaly Detector
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Our anomaly detection model is designed to flag irregularities in
              the stock market with a strong balance of precision and recall,
              ensuring actionable insights while minimizing false alarms.
            </p>
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              About the Model:
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Our XGBoost classifier was trained on the following carefully
              curated set of market indicators: <br /> <br />
              <strong>DXY</strong> (U.S. Dollar Index), <strong>JPY </strong>
              (Japanese Yen Spot), <strong>Cl1</strong> (Crude Oil Futures),{" "}
              <strong>VIX</strong> (Volatility Index), <strong>GT10</strong>{" "}
              (U.S. 10-Year Treasury Yield), and <strong>USGG3M</strong> (U.S.
              3-Month Treasury Yield)
            </p>
            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Overall Performance:
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
              <li className="py-1">
                Accuracy: The model achieves an impressive 93% test accuracy,
                demonstrating its reliability in distinguishing between normal
                market behavior and anomalies.
              </li>
              <li>
                F1-Score: The overall F1-score for anomalies is 0.75, indicating
                a good balance between precision and recall.
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Class 1 (Abnormal Risk/Crisis) Performance:
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
              <li className="py-1">
                Precision (78%): When the model flags an anomaly, it is correct
                78% of the time, or, in other words, there's a 78% chance it is
                truly an anomalous state.
              </li>
              <li className="mb-1">
                Recall (72%): The model successfully detects 72% of all
                anomalies, ensuring most critical events are captured.
              </li>
              <li>
                ROC AUC (91%): The model demonstrates robust discrimination
                between anomalies and normal behavior, with a strong area under
                the curve score of 0.91.
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Class 0 (Normal Market Behavior) Performance:
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              With 96% precision and 97% recall, the model excels at identifying
              normal market activity, minimizing false positives.
            </p>

            <h3 className="text-sm font-semibold text-gray-200 mb-2">
              Generalization:
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              The model shows excellent generalization, with perfect performance
              on training data (1.0 accuracy) and a well-maintained performance
              of 93% test accuracy.
            </p>

            <div className="flex justify-center items-center mt-10">
              <Image
                src="/xgb_ConfusionMatrix.png"
                alt="Confusion Matrix for XGBoost Model"
                width={500}
                height={400}
                className="max-w-full h-auto shadow-md"
              />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
