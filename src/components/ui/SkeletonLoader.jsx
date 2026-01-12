import React from "react";

const SkeletonLoader = ({
  items = 8,
  showTitle = true,
  titleAlign = "left",
  containerClass = "",
}) => {
  return (
    <div className={`bg-[#FFFFFF] w-full mb-6 p-4 ${containerClass}`}>
      {showTitle && (
        <div
          className={`w-full max-w-[90%] mx-auto my-3 lg:my-6 mb-4 animate-pulse ${
            titleAlign === "center" ? "flex justify-center" : ""
          }`}
        >
          <div
            className={`h-6 xl:h-8 bg-gray-300 rounded-md ${
              titleAlign === "center"
                ? "w-[60%] md:w-[40%] mt-6 mb-8"
                : "w-[35%] xl:w-[20%]"
            }`}
          />
        </div>
      )}

      <div
        className={`grid grid-cols-2  gap-4 lg:gap-10 w-full max-w-[90%] mx-auto animate-pulse ${
          titleAlign === "center" ? "md:grid-cols-3 lg:grid-cols-4" : "md:grid-cols-4"
        }`}
      >
        {Array.from({ length: items }).map((_, index) => (
          <div key={index} className="">
            <div className="w-full aspect-[3/4] bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
