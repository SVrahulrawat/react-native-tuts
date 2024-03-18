import {View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {playbackService} from '../../musicPlayerService';

const ControlCenter = () => {
  const playbackState = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePreview = async (playback: State) => {
    let currentTrack = await TrackPlayer.getActiveTrackIndex();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" />
      </Pressable>
      <Pressable onPress={() => togglePreview(playbackState)}>
        <Icon
          style={styles.icon}
          name={playbackState === State.Playing ? 'pause' : 'play-arrow'}
        />
      </Pressable>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});

export default ControlCenter;
