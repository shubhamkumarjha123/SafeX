import React from 'react';
import {View} from 'react-native';
import {Header, Input, Button, Rating} from 'react-native-elements';
import SnackBar from 'react-native-snackbar';

const Review = (props) => {
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [comment, setCmt] = React.useState('');

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          size: 30,
          color: '#fff',
          onPress: () => props.navigation.goBack(),
        }}
        centerComponent={{
          text: 'Review',
          style: {fontSize: 24, fontWeight: 'bold', color: '#fff'},
        }}
        placement="left"
      />

      <View>
        <Input
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="E-mail"
          value={mail}
          onChangeText={(text) => setMail(text)}
        />
        <Input
          multiline
          numberOfLines={4}
          placeholder="Comments (Optional)"
          value={comment}
          onChangeText={(text) => setCmt(text)}
        />
        <Rating startingValue={0} showRating fractions={1} />

        <Button
          title="Submit"
          containerStyle={{marginTop: 10, padding: 10}}
          onPress={() =>
            SnackBar.show({
              text: 'Thanks! for your review',
              duration: SnackBar.LENGTH_SHORT,
            })
          }
        />
      </View>
    </View>
  );
};

export default Review;
