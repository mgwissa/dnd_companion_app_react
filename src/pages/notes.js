import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "@/store/slices/app-slice";

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("notes"));
  }, []);
  return (
    <div>
      <h1>Notes Page</h1>
    </div>
  );
};

export default Notes;
