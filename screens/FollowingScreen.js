import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const VIDEO_DATA = {
  username: '@karennne',
  date: '1-28',
  caption: '#avicii #wlove',
  song: 'Twick - Waiting For Love (R...',
  likes: '4445',
  comments: '64',
  bgColor: '#c5a882',
};

export default function FollowingScreen({ navigation }) {
  return (
    <View style={styles.container}>
          {/* Background Image */}
          <Image
            source={require('../assets/Background1.png')}
            style={styles.videoBackground}
            resizeMode="cover"
          />

      {/* Right Side Actions */}
      <View style={styles.rightActions}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/Avatar1.png')}
              style={styles.avatar}
          />
          <View style={styles.followBtn}>
            <Ionicons name="add" size={14} color="#fe2c55" />
          </View>
      </View>

        {/* Like */}
        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="heart" size={35} color="#fff" />
          <Text style={styles.actionCount}>{VIDEO_DATA.likes}</Text>
        </TouchableOpacity>

        {/* Comment */}
        <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('Comments')}>
          <Ionicons name="chatbubble-ellipses" size={32} color="#fff" />
          <Text style={styles.actionCount}>{VIDEO_DATA.comments}</Text>
        </TouchableOpacity>

        {/* Share */}
        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="share-social" size={32} color="#fff" />
          <Text style={styles.actionCount}>Share</Text>
        </TouchableOpacity>

        {/* Music disc */}
        <View style={styles.musicDisc}>
          <Image
            source={require('../assets/Disc1.png')}
          />
        </View>
      </View>

      {/* Bottom Info */}
      <View style={styles.bottomInfo}>
        <Text style={styles.username}>
          {VIDEO_DATA.username} · {VIDEO_DATA.date}
        </Text>
        <Text style={styles.caption}>{VIDEO_DATA.caption}</Text>
        <View style={styles.songRow}>
          <Ionicons name="musical-notes" size={14} color="#fff" />
          <Text style={styles.songText}>{VIDEO_DATA.song}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  rightActions: {
    position: 'absolute',
    right: 12,
    bottom: 10,
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#888',
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  followBtn: {
    position: 'absolute',
    bottom: -10,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  actionItem: {
    alignItems: 'center',
    marginBottom: 4,
  },
  actionCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  musicDisc: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#333',
    borderWidth: 8,
    borderColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },

  bottomInfo: {
    position: 'absolute',
    left: 16,
    bottom: 10,
    right: 80,
  },
  username: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  caption: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  songText: {
    color: '#fff',
    fontSize: 13,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
