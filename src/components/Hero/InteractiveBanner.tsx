"use client";
import { lazy, useState, Suspense } from "react";
import { cn } from "@/utils/cn";
import { useI18n } from "@/locales/client";
import Loading from "../Common/Loading";
import Image from "next/image";

const ThreeFiber = lazy(() => import("./ThreeFiber"));

export default function InteractiveBanner() {
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(true);
  const [isHelpVisible, setIsHelpVisible] = useState<boolean>(false);

  const t = useI18n();
  return (
    <>
      <div
        className={cn(
          "relative h-[80dvh] w-full ",
          "bg-gradient-to-b from-slate-300 via-transparent to-slate-400",
        )}
      >
        {isOverlayVisible ? (
          <div
            className={cn(
              "absolute inset-0 z-10 size-full",
              "flex flex-col items-center justify-center gap-12 px-6",
              "text-center",
              "relative bg-black/50",
            )}
          >
            <Image
              src="/logo.svg"
              alt="Background Logo"
              fill
              className="absolute object-cover opacity-10"
              priority
            />

            {/* Content overlay */}
            <div className="relative z-20">
              <h1 className={cn(`mb-4 text-white`, "text-4xl font-bold")}>
                {t("slogan")}
              </h1>
              <button
                onClick={() => setIsOverlayVisible(false)}
                className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-black transition-transform hover:scale-105"
              >
                {t("cta")}
              </button>
            </div>
          </div>
        ) : (
          <Suspense fallback={<Loading />}>
            <ThreeFiber />
            {isHelpVisible && (
              <div
                className={cn(
                  "w-[200px] text-balance bg-white text-center text-black",
                  "rounded-lg p-4",
                  "absolute bottom-[10%] right-4  shadow-lg",
                )}
              >
                <p>{t("help")}</p>
              </div>
            )}
            {/* CONTROLS */}
            <ControlButton
              className="absolute right-4 top-4 size-10 rounded-full text-xl"
              text="X"
              handleClick={() => setIsOverlayVisible(true)}
            />
            <ControlButton
              className="absolute bottom-4 right-4 size-10 rounded-full text-xl"
              text="?"
              handleClick={() => setIsHelpVisible(!isHelpVisible)}
            />
          </Suspense>
        )}
      </div>
    </>
  );
}

function ControlButton({
  className,
  text,
  handleClick,
}: {
  className: string;
  text: string;
  handleClick: () => void;
}) {
  return (
    <button
      className={cn(
        " bg-primary  text-white opacity-30",
        "dark:bg-white dark:text-black",
        "transition-opacity duration-300 hover:opacity-100",
        `${className}`,
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
