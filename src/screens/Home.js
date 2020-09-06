/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {Header, SearchBar, Text, Button, Image} from 'react-native-elements';

class Home extends React.Component {
  state = {
    searchTerm: '',
    places: [
      'Hotels',
      'Gym',
      'Grocery Store',
      'Worship Places',
      'Bank/Atm',
      'Office',
      'Malls',
      'Public Transport',
    ],
    safe: [
      {
        place: 'Caffeteria',
        time: '30 min',
        pic: require('./../images/w1.jpeg'),
      },
      {
        place: 'Deserts Dinnings',
        time: '25 min',
        pic: require('./../images/w2.jpeg'),
      },
      {
        place: 'Coll Drinks',
        time: '20 min',
        pic: require('./../images/w3.jpeg'),
      },
      {place: 'MP Caffe', time: '10 min', pic: require('./../images/w4.jpeg')},
      {
        place: 'Chinese Spot',
        time: '20 min',
        pic: require('./../images/w5.jpeg'),
      },
    ],
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header
          placement="left"
          centerComponent={
            <Image
              source={require('./../images/logo.jpeg')}
              style={{height: 50, width: 110}}
            />
          }
          rightComponent={
            <>
              <Text>Your Safety</Text>
              <Text>Our Priority</Text>
            </>
          }
          containerStyle={{backgroundColor: '#fff'}}
        />
        <ScrollView>
          <SearchBar
            lightTheme
            placeholder="Search for restaurants, cuisines.."
            value={this.state.searchTerm}
            onChangeText={(searchTerm) => this.setState({searchTerm})}
          />

          <View>
            <Text h4>Check Covid Safety Score</Text>
            <FlatList
              data={this.state.places}
              keyExtractor={(item, i) => i.toString()}
              numColumns={4}
              renderItem={({item}) => {
                return (
                  <TouchableWithoutFeedback onPress={() => console.log(item)}>
                    <View style={styles.GridViewContainer}>
                      <Text style={styles.GridTextContainer}>{item}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              }}
            />

            <Button
              title="see more"
              buttonStyle={{
                backgroundColor: '#F5F5F5',
                borderWidth: 1,
                borderColor: 'grey',
              }}
              titleStyle={{color: 'black'}}
              containerStyle={{margin: 10}}
            />
          </View>

          <View>
            <Text style={{fontSize: 22}}>Popular places</Text>
            <FlatList
              data={this.state.safe}
              keyExtractor={(item, i) => i.toString()}
              horizontal
              renderItem={({item}) => {
                return (
                  <Image
                    source={item.pic}
                    style={{height: 150, width: 150, margin: 3}}
                    onPress={() => this.props.navigation.navigate('details')}
                  />
                );
              }}
            />
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 22}}>Top Safest Places in SpotLight</Text>

            <FlatList
              data={this.state.safe}
              horizontal
              keyExtractor={(item, i) => i.toString()}
              renderItem={({item}) => {
                return (
                  <TouchableNativeFeedback
                    onPress={() =>
                      this.props.navigation.navigate('details', {
                        uri: item.pic,
                        name: item.place,
                      })
                    }>
                    <View style={{margin: 3}}>
                      <Image
                        source={item.pic}
                        style={{height: 150, width: 150}}
                      />
                      <View style={{alignItems: 'center', marginTop: 10}}>
                        <Text style={{fontSize: 16}}>{item.place}</Text>
                        <Text style={{color: 'grey'}}>{item.time}</Text>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  GridViewContainer: {
    height: 50,
    margin: 3,
    borderWidth: 3,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  GridTextContainer: {
    padding: 2,
    fontSize: 16,
    justifyContent: 'center',
  },
});

export default Home;
