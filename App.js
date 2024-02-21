import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const earthImage = require('./earth_image.png');
  const [selectedButton, setSelectedButton] = React.useState(1);

  const handleButtonPress = index => {
    setSelectedButton(index);
  };

  const images = [
    'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/8b/c6/81.jpg',
    'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1614088459293-5669fadc3448?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const imageTitles = ['USA', 'Maldives', 'Brazzil'];
  const fromLocations = ['NY', 'LA', 'SF'];
  const fullFromLocations = ['New York', 'Los Angeles', 'San Francisco'];
  const toLocations = ['TX', 'FL', 'IL'];
  const fullToLocations = ['Texas', 'Florida', 'Illinois'];
  const dummyFlightDurations = ['2h 30m', '3h 15m', '4h 0m'];
  const startDates = ['May 10', 'June 5', 'July 15'];
  const endDates = ['May 20', 'June 20', 'July 25'];

  const planePathImage =
    'https://t3.ftcdn.net/jpg/05/45/73/74/240_F_545737436_nNvmWyxrqq74THnvIRYe5ouCApcQ3kbK.jpg';

  const styles = {
    title: {
      color: '#3498db',
      fontSize: 14,
      fontWeight: 'bold',
      marginRight: 5,
    },
    location: {
      color: '#000000',
      fontSize: 21,
      fontWeight: 'bold',
      padding: 15,
    },
    fullLocation: {
      color: 'gray',
      marginTop: 5,
      fontSize: 14,
      fontWeight: 'bold',
      flexDirection: 'row',
      justifyContent: 'space-between',
      overflow: 'hidden',
      width: 65,
      height: 50,
      paddingLeft: 15,
    },
    flightDuration: {
      textAlign: 'center',
      marginTop: 5,
      fontSize: 14,
      color: '#e74c3c',
      marginRight: 50,
      marginLeft: 50,
      //fontWeight: 'bold',
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
      backgroundColor: '#dcdcdc',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      shadowColor: '#a0a0a0',
      shadowOpacity: 0.2,
      padding: 20,
      paddingHorizontal: 10,
    },
    datestyle: {
      flex: 2,
      textAlign: 'center',
      marginLeft: 40,
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    detailsButton: {
      backgroundColor: '#FBDC5D',
      flex: 1,
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      marginRight: 20,
      marginBottom: 20,
    },
    detailsButtonText: {
      color: 'black',
      fontWeight: 'bold',
    },
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingRight: 0,
        marginTop: 40,
      }}>
      <ScrollView>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 50, fontWeight: 'bold', marginBottom: 5}}>
              Find types
            </Text>
            <Text style={{fontSize: 25}}>of your travel!</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              padding: 10,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              marginTop: 25,
              shadowColor: '#a0a0a0',
              shadowOpacity: 1,
              marginRight: 25,
            }}
            onPress={() => handleButtonPress(0)}>
            <FontAwesome name="glass" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5].map(index => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor:
                  selectedButton === index ? '#FBDC5D' : '#d3d3d3',
                padding: 10,
                borderRadius: 45,
                marginRight: 15,
                height: 130,
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                overflow: 'hidden',
              }}
              onPress={() => handleButtonPress(index)}>
              <Image
                source={earthImage}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 40,
                  marginBottom: 20,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  marginTop: 5,
                  height: 20,
                  width: 40,
                  overflow: 'scroll',
                  textAlign: 'center',
                }}>
                {index}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginVertical: 0,
            marginTop: 40,
            marginBottom: 20,
          }}>
          For You
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((image, index) => (
            <View key={index} style={{marginRight: 10}}>
              <Image
                source={{uri: image}}
                style={{
                  width: '100%',
                  height: 175,
                  borderRadius: 30,
                  shadowColor: '#a0a0a0',
                  shadowOpacity: 2,
                }}
              />
              <Text
                style={{
                  textAlign: 'left',
                  marginTop: 10,
                  fontWeight: 'bold',
                  fontSize: 21,
                  paddingLeft: 15,
                }}>
                {imageTitles[index]}
              </Text>
              <View style={styles.infoContainer}>
                <Text style={styles.location}>{fromLocations[index]}</Text>
                <Image
                  source={{uri: planePathImage}}
                  style={{
                    width: 150,
                    height: 40,
                    resizeMode: 'cover',
                    marginHorizontal: 5,
                  }}
                />
                <Text style={styles.location}>{toLocations[index]}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.fullLocation}>
                  {fullFromLocations[index]}
                </Text>
                <Text style={styles.flightDuration}>
                  {dummyFlightDurations[index]}
                </Text>
                <Text style={styles.fullLocation}>
                  {fullToLocations[index]}
                </Text>
              </View>

              <View style={styles.dateContainer}>
                <View style={styles.datestyle}>
                  <Text style={{marginTop: 5, fontWeight: 'bold'}}>
                    {startDates[index]}
                  </Text>
                  <Text style={{marginTop: 15, fontWeight: 'bold'}}>
                    {endDates[index]}
                  </Text>
                </View>
                <TouchableOpacity style={styles.detailsButton}>
                  <Text style={styles.detailsButtonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          paddingRight: 50,
          alignItems: 'center',
          position: 'relative',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#000000',
            padding: 30,
            borderRadius: 50,
            bottom: 0,
            width: 275,
            position: 'absolute',
            left: '15%',
          }}>
          {[1, 2, 3].map(index => (
            <TouchableOpacity
              key={index}
              style={{flex: 1, alignItems: 'center'}}>
              <Text style={{color: 'white'}}>{index}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default App;
