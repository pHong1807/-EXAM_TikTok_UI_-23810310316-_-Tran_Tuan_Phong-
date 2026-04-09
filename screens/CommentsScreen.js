import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const COMMENTS_DATA = [
  {
    id: '1',
    username: 'martini_rond',
    text: 'How neatly I write the date in my book',
    time: '22h',
    likes: 8098,
    replies: 40,
  },
  {
    id: '2',
    username: 'marjacobsien',
    text: "Now that's a skill very talented",
    time: '22h',
    likes: 8098,
    replies: 0,
  },
  {
    id: '3',
    username: 'zackjohn',
    text: 'Doing this would make me so anxious',
    time: '22h',
    likes: 8098,
    replies: 0,
  },
  {
    id: '4',
    username: 'klero_d',
    text: 'Use that on r air forces to whiten them',
    time: '22h',
    likes: 8098,
    replies: 9,
  },
  {
    id: '5',
    username: 'mia_potter',
    text: "S'pud've used that on his forces 😂👀",
    time: '11h',
    likes: 8098,
    replies: 0,
  },
  {
    id: '6',
    username: 'karennnne',
    text: 'No pressure',
    time: '22h',
    likes: 8098,
    replies: 2,
  },
  {
    id: '7',
    username: 'Joshua_l',
    text: "My OCD couldn't do it",
    time: '15h',
    likes: 8098,
    replies: 0,
  },
  {
    id: '8',
    username: 'sam_hill',
    text: 'This is so satisfying to watch 🔥',
    time: '10h',
    likes: 3420,
    replies: 5,
  },
  {
    id: '9',
    username: 'theresa_m',
    text: 'Road marking guys deserve more respect 💪',
    time: '8h',
    likes: 5600,
    replies: 12,
  },
];

function CommentItem({ item }) {
  const formatLikes = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
  };

  return (
    <View style={styles.commentItem}>
      {/* Avatar */}
      <View style={styles.commentAvatar}>
        <Ionicons name="person" size={18} color="#fff" />
      </View>

      {/* Content */}
      <View style={styles.commentContent}>
        <Text style={styles.commentUsername}>{item.username}</Text>
        <Text style={styles.commentText}>{item.text}</Text>
        <View style={styles.commentMeta}>
          <Text style={styles.commentTime}>{item.time}</Text>
          {item.replies > 0 && (
            <TouchableOpacity>
              <Text style={styles.viewReplies}>View replies ({item.replies})</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Like */}
      <View style={styles.commentLike}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={20} color="#888" />
        </TouchableOpacity>
        <Text style={styles.commentLikeCount}>{formatLikes(item.likes)}</Text>
      </View>
    </View>
  );
}

export default function CommentsScreen() {
  const [commentText, setCommentText] = useState('');
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Video Thumbnail Header */}

      {/* Comments Panel */}
      <View style={styles.commentsPanel}>
        {/* Header */}
        <View style={styles.commentsHeader}>
          <Text style={styles.commentsCount}>579 comments</Text>
          <TouchableOpacity>
            <Ionicons name="close" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Comments List */}
        <FlatList
          data={COMMENTS_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CommentItem item={item} />}
          style={styles.commentsList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
        />

        {/* Input Bar */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={[styles.inputBar, { paddingBottom: Math.max(insets.bottom, 8) }]}>
            <View style={styles.inputAvatar}>
              <Ionicons name="person" size={14} color="#fff" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Add comment..."
              placeholderTextColor="#999"
              value={commentText}
              onChangeText={setCommentText}
              multiline={false}
            />
            <View style={styles.inputIcons}>
              <TouchableOpacity style={styles.inputIcon}>
                <Ionicons name="happy-outline" size={22} color="#555" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputIcon}>
                <Ionicons name="at-outline" size={22} color="#555" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  // Video preview at top
  videoPreview: {
    height: height * 0.28,
    backgroundColor: '#1a0a00',
    overflow: 'hidden',
  },
  videoThumb: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  concertBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0d0508',
  },
  redBanner1: {
    position: 'absolute',
    top: 20,
    left: '10%',
    width: 200,
    height: 300,
    backgroundColor: 'rgba(180,30,30,0.5)',
    transform: [{ skewX: '10deg' }],
  },
  redBanner2: {
    position: 'absolute',
    top: 10,
    right: '5%',
    width: 150,
    height: 250,
    backgroundColor: 'rgba(150,20,20,0.4)',
    transform: [{ skewX: '-15deg' }],
  },

  // Comments panel
  commentsPanel: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  commentsHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    position: 'relative',
  },
  commentsCount: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },

  commentsList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  commentItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'flex-start',
  },
  commentAvatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentUsername: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    marginBottom: 3,
  },
  commentText: {
    fontSize: 14,
    color: '#111',
    lineHeight: 20,
    marginBottom: 4,
  },
  commentMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  commentTime: {
    fontSize: 12,
    color: '#999',
  },
  viewReplies: {
    fontSize: 12,
    color: '#555',
    fontWeight: '600',
  },
  commentLike: {
    alignItems: 'center',
    marginLeft: 8,
    minWidth: 40,
  },
  commentLikeCount: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },

  // Input bar
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  inputAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 38,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#111',
  },
  inputIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  inputIcon: {
    marginLeft: 6,
  },
});
