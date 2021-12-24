import { useContext, useState } from "react";
import { storage } from "../../firebase";
import { MovieContext } from "../../ContextAPI/MovieContext/Auth";
import "./newProduct.css";
import { createMovie } from "../../ContextAPI/MovieContext/ApiLoginCall";

export default function NewProduct() {

  const [movie, setMovie] = useState(null)
  const [image, setImage] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [upload, setUpload] = useState(0)
  const [ImgTitle, setImgTitle] = useState(null)
  const [ImgSm, setImgSm] = useState(null)

  const { dispatch } = useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value
    setMovie({
      ...movie,
      [e.target.name]: value
    })
  }
  // console.log(image);


  const uploadTofirebase = (items) => {
    items.forEach((item) => {
      const filename = new Date().getTime() + item.label + item.file.name;
      const uploadItem = storage.ref(`/items/${filename}`).put(item.file)
      uploadItem.on("state_changed", (snapshot) => {
        const progressBar = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("upload" + progressBar + "% file successfully");
      },
        () => {
          uploadItem.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return {
                ...prev,
                [item.label]: url
              }
            })
            // setUpload((prev) => prev + 1)
          })
        },
        (err) => {
          console.log(err);
        }
      )
    });
  }

  const handleUpload = (e) => {
    createMovie(movie, dispatch)
    e.preventDefault()
    uploadTofirebase([
      { file: image, label: "image" },
      { file: ImgSm, label: "ImgSm" },
      { file: ImgTitle, label: "ImgTitle" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" }
    ])
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Add New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <button onClick={handleUpload} className="addProductButton" >
          Upload
        </button>
      </form>
    </div>
  );
}
