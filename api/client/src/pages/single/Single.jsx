import "./single.css";
import Footer from "../../components/footer/Footer"
import SinglePost from "../../components/singlePost/SinglePost";
import {AxiosInstance} from "../../config";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      
    </div>
  );
}
