import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";
import MediaControls, { PLAYER_STATES } from "react-native-media-controls";

export default class ReactVideo extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: "contain",
    };

    console.disableYellowBox = true;
  }

  //Handler for change in seekbar
  onSeek = (seek) => {
    this.videoPlayer.seek(seek);
  };

  //Handler for Video Pause
  onPaused = (playerState) => {
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  //Handler for Replay
  onReplay = () => {
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  // Video Player will continue progress even if the video already ended
  onProgress = (data) => {
    const { isLoading, playerState } = this.state;

    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };

  onLoad = (data) =>
    this.setState({ duration: data.duration, isLoading: false });

  onLoadStart = (data) => this.setState({ isLoading: true });

  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

  onError = () => alert("Something Wrong!! ", error);

  exitFullScreen = () => {
    alert("Exit full screen");
  };

  enterFullScreen = () => {
    alert("entered full screen");
  };

  onFullScreen = () => {
    if (this.state.screenType == "contain")
      this.setState({ screenType: "cover" });
    else this.setState({ screenType: "contain" });
  };
  renderToolbar = () => (
    <View>
      <Text>Video Streaming Example </Text>
    </View>
  );

  onSeeking = (currentTime) => this.setState({ currentTime });

  render() {
    return (
      <View style={styles.container}>
        <Video
          style={styles.mediaPlayer}
          onEnd={this.onEnd}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          paused={this.state.paused}
          ref={(videoPlayer) => (this.videoPlayer = videoPlayer)}
          resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
          repeat={false}
          controls={false}
          volume={10}
        />

        <MediaControls
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          mainColor="#333"
          onFullScreen={this.onFullScreen}
          onPaused={this.onPaused}
          onReplay={this.onReplay}
          onSeek={this.onSeek}
          onSeeking={this.onSeeking}
          playerState={this.state.playerState}
          progress={this.state.currentTime}
          toolbar={this.renderToolbar()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mediaPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black",
  },
});
