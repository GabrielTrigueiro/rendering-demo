import ImageSlider from "@/components/ImageSlide";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  console.log("Server route rendered");
  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
