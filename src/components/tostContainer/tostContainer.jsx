import { useEffect } from "react";
import { toast } from "react-toastify";

export default function TostContainer({ status, name }) {
  useEffect(() => {
    if (status === "delete") {
      toast.error(`${name} deleted from your list.`);
    } else {
      toast.success(`${name} added to your list.`);
    }
  });

  return (
    <>
      <TostContainer />
    </>
  );
}
