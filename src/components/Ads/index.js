import "./Ads.css";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegCommentAlt } from "react-icons/fa";
import { FbImageLibrary } from "react-fb-image-grid";

function Ads({ data }) {
  // const { fbPostData } = props;
  // console.log(data);

  return (
    <>
      {data.map((item, value) => {
        return (
          <div key={value} className='fb-post'>
            <div className='header'>
              <img src={item.profilePic} alt='profile' />
              <div className='profile'>
                <span className='username'>
                  <b>{item.username}</b>
                </span>
                <span className='date'>{item.date}</span>
              </div>
            </div>
            <div>
              <p className='post-body'>{item.text}</p>
              <FbImageLibrary images={data.images} />
            </div>
            <div className='response'>
              <div className='likes'></div>
              <div className='comments'></div>
            </div>
            <hr />
            <div className='feedback'>
              <button className='like'>
                <AiOutlineLike
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                Like
              </button>
              <button className='comment'>
                <FaRegCommentAlt
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                Comment
              </button>
              <button className='share'>
                <RiShareForwardLine
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                Share
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Ads;
