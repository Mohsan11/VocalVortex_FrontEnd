import React, { Component } from "react";
import TextToSpeech from "../TextToSpeech/text-Speech";
import "./VocalVortex.css";
import Image from "../Images/chatbot_Img.png";
class VocalVortex extends Component {
  constructor() {
    super();
    this.state = {
      Languages: [
        "English",
        "French",
        "Spanish",
        "German",
        "Italian",
        "Dutch",
        "Portuguese",
        "Russian",
        "Chinese",
        "Chinese-Traditional",
        "Japanese",
        "Korean",
        "Arabic",
        "Hindi",
        "Bengali",
        "Tamil",
        "Turkish",
        "Greek",
        "Polish",
        "Thai",
        "Vietnamese",
        "Swedish",
        "Czech",
        "Danish",
        "Finnish",
        "Hungarian",
        "Norwegian",
        "Romanian",
        "Slovak",
        "Slovenian",
        "Ukrainian",
      ],
      data: "",
      text: "",
      InputLanguage: "English",
      OutputLanguage: "English",
      loading: false,
    };
  }

  onInputChange = (e) => {
    this.setState({ InputLanguage: e.target.value });
  };
  onOutputChange = (e) => {
    this.setState({ OutputLanguage: e.target.value });
  };
  onChatBoxchange = (e) => {
    this.setState({ text: e.target.value });
  };

  onClickSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    this.setState({ loading: true });
    if (this.state.text === "") {
      alert("Please add some text");
      return;
    }
    console.log(this.state.text);
    this.setState({ data: "Loading..." });
    this.setState({ loading: true });
    fetch("http://localhost:3001/summary", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        inputData: this.state.text,
        InputLanguage: this.state.InputLanguage,
        OutputLanguage: this.state.OutputLanguage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const textValue = data;
        this.setState({ loading: false, data: textValue });
      })
      .catch((err) => {
        console.log("Error: ", err);
        this.setState({ loading: false });
      });
  };
  onDownloadClick = () => {
    const { data } = this.state;

    // Create a text blob
    const textBlob = new Blob([data.translatedText], { type: "text/plain" });

    // Create a URL for the text blob
    const textUrl = URL.createObjectURL(textBlob);

    // Create a download link for the text
    const textLink = document.createElement("a");
    textLink.href = textUrl;
    textLink.download = "summary.txt";
    textLink.click();

    // Create a download link for the image
    const imageLink = document.createElement("a");
    imageLink.href = data.imageUrl;
    imageLink.download = "image.png";
    imageLink.click();

    // Revoke the URLs to free up resources
    URL.revokeObjectURL(textUrl);
  };

  render() {
    const { data, OutputLanguage, InputLanguage, Languages, loading } =
      this.state;
    const showImage = data && data !== "Loading" && data !== "";
    return (
      <div>
        <div className="container">
          <h1>VocalVortex</h1>
          <p>
            Introducing VocalVortex - Your Multilingual Text-to-Speech Journey!
            Step into a realm of vast texts and instant summaries. Effortlessly
            switch between languages, hear lifelike spoken responses, and
            immerse yourself in an interactive reading experience. With
            VocalVortex, reading becomes a captivating adventure. Experience the
            magic of language like never before! Start your multilingual reading
            journey with <strong>VocalVortex</strong> today and unlock a new
            dimension of communication!
          </p>
          <form>
            <label htmlFor="input1">Message</label>
            <input
              type="text"
              id="input1"
              placeholder="Enter your Text"
              onChange={this.onChatBoxchange}
            />
            <div className="languages">
              <label className="labeles" htmlFor="input2">
                Input Language
              </label>
              <select
                id="input2"
                onChange={this.onInputChange}
                value={InputLanguage}
              >
                {Languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>

              <label className="labeles" htmlFor="input3">
                Output Language
              </label>
              <select
                id="input3"
                onChange={this.onOutputChange}
                value={OutputLanguage}
              >
                {Languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
              <button
                className="submit"
                type="submit"
                onClick={this.onClickSubmit}
              >
                Submit
              </button>
            </div>
          </form>

          <div id="result">
            <div id="resultText">
              <div>
                <div className="reply">
                  {showImage ? (
                    <div className="onloading">
                      <img src={Image} alt="reply_logo" className="logo2" />
                      {loading === true ? <p>Loading...</p> : <div></div>}
                    </div>
                  ) : null}
                  {data === "" || data === "Loading..." || data === null ? (
                    <div></div>
                  ) : (
                    <div>
                      <p className="response">{data.translatedText}</p>
                      <TextToSpeech
                        Text={data.translatedText}
                        OutputLanguage={OutputLanguage}
                      />
                      <img className="genimg" src={data.imageUrl} alt=" " />
                      <br></br>
                      <button
                        className="download"
                        type="button"
                        onClick={this.onDownloadClick}
                        disabled={!data || loading}
                      >
                        Download
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VocalVortex;
