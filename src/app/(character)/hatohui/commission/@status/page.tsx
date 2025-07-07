import Button from "@/components/common/Button";
import LinkButton from "@/components/common/LinkButton";
import React from "react";

const CommStatus = () => {
  const status = false;

  return (
    <div className="w-full flex justify-around space-x-4">
      <div className="comm-section space-x-3 flex-1/3">
        <span className="card-title whitespace-nowrap">Commission Status:</span>
        <span>
          {status ? (
            <span className="text-lime-700 border rounded-md p-1 text-sm">
              OPEN
            </span>
          ) : (
            <span className="text-red-700 border rounded-md p-1 text-sm">
              CLOSED
            </span>
          )}
        </span>
      </div>
      <div className="comm-section space-x-1">
        <span className="card-title">Want to see some example?</span>
        <span className="font-light text-xs italic">To the gallery!</span>
        <LinkButton className="ml-2" href="hatohui/gallery">
          Gallery
        </LinkButton>
      </div>
    </div>
  );
};

export default CommStatus;
