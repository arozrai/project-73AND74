import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {SearchBar} from 'react-native-elements'
import db from '../config'

export default class ReadStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTransactions: [],
      lastVisibleTransaction: null,
    };
  }

  fetchMoreStories = async () => {
    var text = this.state.search.toUpperCase();
    var enteredText = text.split('');
    if (enteredText[0].toUpperCase() === 'B') {
      const query = await db
        .collection('transactions')
        .where('bookId', '==', text)
        .startAfter(this.state.lastVisibleTransaction)
        .limit(10)
        .get();
      query.docs.map((doc) => {
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc,
        });
      });
    } else if (enteredText[0].toUpperCase() === 'S') {
      const query = await db
        .collection('transactions')
        .where('bookId', '==', text)
        .startAfter(this.state.lastVisibleTransaction)
        .limit(10)
        .get();
      query.docs.map((doc) => {
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc,
        });
      });
    }
  };

  searchStories = async (text) => {
    var enteredText = text.split('');
    if (enteredText[0].toUpperCase() === 'B') {
      const transaction = await db
        .collection('transactions')
        .where('bookId', '==', text)
        .get();
      transaction.docs.map((doc) => {
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc,
        });
      });
    } else if (enteredText[0].toUpperCase() === 'S') {
      const transaction = await db
        .collection('transactions')
        .where('studentId', '==', text)
        .get();
      transaction.docs.map((doc) => {
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc,
        });
      });
    }
  };

  componentDidMount = async () => {
    const query = await db.collection("transactions").limit(10).get()
    query.docs.map((doc) => {
      this.setState({ allTransactions: [], 
      lastVisibleTransaction: doc });
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Enter BookID or StudentID"
            style={styles.bar}
            onChangeText={(text) => {
              this.setState({ search: text });
            }}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.searchTransactions(this.state.search);
            }}>
            {' '}
            <Text>Search</Text>{' '}
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.allTransactions}
          renderItem={({ item }) => (
            <View style={{ borderBottomWidth: 2 }}>
              <Text> {'Book Id: ' + item.bookId} </Text>
              <Text> {'Student id: ' + item.studentId} </Text>
              <Text> {'Transaction Type: ' + item.transactionType} </Text>
              <Text> {'Date: ' + item.date.toDate()} </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.fetchMoreTransactions}
          onEndReachedThreshold={0.7}
        />
      </View>
    );
  }
}