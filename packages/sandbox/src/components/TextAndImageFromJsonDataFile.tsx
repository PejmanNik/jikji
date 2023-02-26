import { useJsonData, Image } from "@jikji/react";

interface DataModel {
  text: string;
  img1: string;
}

function TextAndImageFromJsonDataFile() {
  const data = useJsonData<DataModel>();

  return (
    <>
      <div>
        TEXT FROM DATA FILE: {data.text}
        <Image src={data.img1} />
      </div>
    </>
  );
}

export default TextAndImageFromJsonDataFile;
