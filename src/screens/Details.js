/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Rating, Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

const Heading = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
      <Text
        style={{
          borderWidth: 2,
          borderColor: '#A5C3C3',
          padding: 8,
          borderRadius: 50,
          color: '#A5C3C3',
          fontWeight: 'bold',
        }}>
        {props.heading}
      </Text>
      <Rating
        startingValue={props.value}
        readonly
        imageSize={30}
        style={{marginLeft: 10}}
      />
      <Text style={{fontSize: 16, marginLeft: 5}}>{props.value}</Text>
    </View>
  );
};

const Details = (props) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar backgroundColor="transparent" />
      <ScrollView>
        <ImageBackground
          source={props.route.params.uri}
          style={{height: 300, flex: 1, width: null}}>
          <View
            style={{
              height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
            }}
          />
          <MaterialIcons
            name="arrow-back"
            color="#ffff"
            size={25}
            style={{marginTop: 10, marginLeft: 10}}
            onPress={() => props.navigation.goBack()}
          />
        </ImageBackground>
        <Text style={{backgroundColor: '#E9B501', color: '#fff', padding: 8}}>
          In light of the government advisory, dinning services may be affected.
          Please contact the restaurant before visiting
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{marginLeft: 10}}>
            <Rating
              startingValue={4}
              imageSize={30}
              readonly
              showRating={false}
              ratingColor="#000"
            />
            <Text
              style={{
                textDecorationLine: 'underline',
                textDecorationStyle: 'dotted',
              }}>
              26 Covid Sop Reviews
            </Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 26, marginRight: 10}}>
              8/10
            </Text>
            <Text style={{marginRight: 10}}>SafeX Score</Text>
          </View>
        </View>

        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text style={{fontSize: 26, fontWeight: 'bold'}}>
            {props.route.params.name}
          </Text>
          <Text style={styles.locationStyle}>
            Casual Dining - Pizza, Fast Food
          </Text>
          <Text style={styles.locationStyle}>Pimpri, Pune</Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{marginTop: 8}}>
                <Text style={{color: '#A7B7C4', fontSize: 17}}>
                  Open Now -{' '}
                </Text>
                <Text style={{color: '#888888', fontSize: 16}}>
                  10:30am - 11pm
                </Text>
              </Text>
              <Text style={{color: '#888888', fontSize: 16}}>
                Cost for two - $5 (approx.)
              </Text>
            </View>

            <View>
              <Feather
                name="phone-call"
                size={30}
                color="red"
                style={{marginTop: 15, marginRight: 20}}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            paddingTop: 10,
            paddingLeft: 10,
            borderTopWidth: 5,
            borderTopColor: '#F3F3F3',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Button
            icon={<MaterialIcons name="rate-review" size={35} color="#000" />}
            onPress={() => props.navigation.navigate('review')}
            type="clear"
          />
          <MaterialIcons name="add-a-photo" size={35} color="#000" />
          <MaterialCommunityIcons name="bookmark-plus" size={35} color="#000" />
          <FontAwesome
            name="share"
            size={35}
            color="#000"
            onPress={() =>
              Share.open({
                message: 'I recommend to visit to this store',
                title: 'SafeX store',
              })
                .then(() => null)
                .catch(() => null)
            }
          />
        </View>

        <View
          style={{
            backgroundColor: '#F6FCFC',
            marginTop: 10,
            marginLeft: 10,
          }}>
          <Text style={{fontSize: 17}}>
            Safety measures followed at restaurant
          </Text>

          <View style={{marginTop: 10}}>
            <Heading heading="Hygiene" value={3.5} />
            <Heading heading="Regular Sanitization" value={3} />
            <Heading heading="Social Distancing" value={5} />
            <Heading heading="Good Ventilation" value={4} />
            <Heading heading="Digital Menu" value={3} />
            <Heading heading="Public Awareness" value={4.5} />
            <Heading heading="Hygiene" value={3.5} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  locationStyle: {
    color: '#888888',
    fontSize: 18,
  },
});

export default Details;
