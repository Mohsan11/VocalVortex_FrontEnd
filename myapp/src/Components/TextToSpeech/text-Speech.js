import React, { Component } from "react";
import "./TextToSpeech.css";
class TextToSpeech extends Component {
  handlePlay = () => {
    const { Text, OutputLanguage } = this.props;
    if (!window.speechSynthesis) {
      console.log("Text-to-speech not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance();
    utterance.voice = this.getVoiceForLanguage(OutputLanguage);
    utterance.volume = 1;
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.text = Text;

    console.log("about to be played.");
    console.log(OutputLanguage);
    window.speechSynthesis.speak(utterance);
  };

  getVoiceForLanguage = (lang) => {
    const voices = window.speechSynthesis.getVoices();
    switch (lang.toLowerCase()) {
      case "english":
        return voices.find((voice) => voice.lang === "en-US");
      case "french":
        return voices.find((voice) => voice.lang === "fr-FR");
      case "spanish":
        return voices.find((voice) => voice.lang === "es-ES");
      case "german":
        return voices.find((voice) => voice.lang === "de-DE");
      case "italian":
        return voices.find((voice) => voice.lang === "it-IT");
      case "dutch":
        return voices.find((voice) => voice.lang === "nl-NL");
      case "portuguese":
        return voices.find((voice) => voice.lang === "pt-PT");
      case "russian":
        return voices.find((voice) => voice.lang === "ru-RU");
      case "chinese":
        return voices.find((voice) => voice.lang === "zh");
      case "chinese-traditional":
        return voices.find((voice) => voice.lang === "zh-TW");
      case "japanese":
        return voices.find((voice) => voice.lang === "ja-JP");
      case "korean":
        return voices.find((voice) => voice.lang === "ko-KR");
      case "arabic":
        return voices.find((voice) => voice.lang === "ar-SA");
      case "hindi":
        return voices.find((voice) => voice.lang === "hi-IN");
      case "bengali":
        return voices.find((voice) => voice.lang === "bn-IN");
      case "tamil":
        return voices.find((voice) => voice.lang === "ta-IN");
      case "turkish":
        return voices.find((voice) => voice.lang === "tr-TR");
      case "greek":
        return voices.find((voice) => voice.lang === "el-GR");
      case "polish":
        return voices.find((voice) => voice.lang === "pl-PL");
      case "thai":
        return voices.find((voice) => voice.lang === "th-TH");
      case "vietnamese":
        return voices.find((voice) => voice.lang === "vi-VN");
      case "swedish":
        return voices.find((voice) => voice.lang === "sv-SE");
      case "czech":
        return voices.find((voice) => voice.lang === "cs-CZ");
      case "danish":
        return voices.find((voice) => voice.lang === "da-DK");
      case "finnish":
        return voices.find((voice) => voice.lang === "fi-FI");
      case "hungarian":
        return voices.find((voice) => voice.lang === "hu-HU");
      case "norwegian":
        return voices.find((voice) => voice.lang === "no-NO");
      case "romanian":
        return voices.find((voice) => voice.lang === "ro-RO");
      case "slovak":
        return voices.find((voice) => voice.lang === "sk-SK");
      case "slovenian":
        return voices.find((voice) => voice.lang === "sl-SI");
      case "ukrainian":
        return voices.find((voice) => voice.lang === "uk-UA");
      default:
        return voices.find((voice) => voice.lang === "en-US"); // Default to English if language not found
    }
  };

  handleStop = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  };

  handleContinue = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  };

  handlePause = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
    }
  };

  handleRefresh = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    this.handlePlay();
  };

  render() {
    const { Text } = this.props;
    return (
      <div>
        {Text === null || Text === "Loading..." ? (
          <div></div>
        ) : (
          <>
            <button className="btn" onClick={this.handlePlay}>
              Play
            </button>
            <button className="btn" onClick={this.handlePause}>
              Pause
            </button>
            <button className="btn" onClick={this.handleStop}>
              Stop
            </button>
          </>
        )}
      </div>
    );
  }
}

export default TextToSpeech;
