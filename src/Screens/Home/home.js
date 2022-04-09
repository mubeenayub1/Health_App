import React, {useState, useRef, useEffect} from 'react';
import MapView, {
  Callout,
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import styles from './styles';
import {useSelector} from 'react-redux';
import {GOOGLE_MAP_KEY} from '../../constants/googleMapKey';
import imagePath from '../../constants/imagePath';
import MapViewDirections from 'react-native-maps-directions';
import Loader from '../../components/Loader';
import {
  locationPermission,
  getCurrentLocation,
} from '../../helper/helperFunction';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = () => {
  const {name} = useSelector(state => state);
  const {age} = useSelector(state => state);
  const {height} = useSelector(state => state);
  const {weight} = useSelector(state => state);
  const {targetweight} = useSelector(state => state);
  const [geoInfo, setGeoInfo] = useState('');
  const mapRef = useRef();
  const markerRef = useRef();

  const [state, setState] = useState({
    curLoc: {
      latitude: 30.7046,
      longitude: 77.1025,
    },
    destinationCords: {},
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 30.7046,
      longitude: 77.1025,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const {
    curLoc,
    time,
    distance,
    destinationCords,
    isLoading,
    coordinate,
    heading,
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));

  useEffect(() => {
    getLiveLocation();
  }, []);

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude, heading} = await getCurrentLocation();
      // console.log('get live location after 4 second', heading);
      animate(latitude, longitude);
      updateState({
        heading: heading,
        curLoc: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // const onPressLocation = () => {
  //   navigation.navigate('chooseLocation', {getCordinates: fetchValue});
  // };
  // const fetchValue = data => {
  //   console.log('this is data', data);
  //   updateState({
  //     destinationCords: {
  //       latitude: data.destinationCords.latitude,
  //       longitude: data.destinationCords.longitude,
  //     },
  //   });
  // };

  const animate = (latitude, longitude) => {
    const newCoordinate = {latitude, longitude};
    if (Platform.OS == 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  const onCenter = () => {
    mapRef.current.animateToRegion({
      latitude: curLoc.latitude,
      longitude: curLoc.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const fetchTime = (d, t) => {
    updateState({
      distance: d,
      time: t,
    });
  };

  // const location = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       Geolocation.getCurrentPosition(
  //         position => {
  //           setGeoInfo({
  //             lat: position.coords.latitude,
  //             long: position.coords.longitude,
  //           });
  //           // setGeoInfo(position);
  //           console.log(position);
  //         },
  //         error => {
  //           console.log(error);
  //         },

  //         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //       );
  //     } else {
  //       console.log('location permission denied');
  //       alert('Location permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  // console.log(setGeoInfo);
  //

  return (
    <View style={styles.maincontainer}>
      <View>
        <ImageBackground
          source={require('../../../assets/header.jpg')}
          style={styles.container}>
          <View style={styles.mainheader}>
            <Image
              source={require('../../../assets/dummyimage.png')}
              style={styles.image}></Image>

            <Text style={styles.headertext}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.midcontainer}>
        <ImageBackground
          source={require('../../../assets/splashimg1.jpg')}
          style={styles.mid}>
          <View style={styles.excontainer}>
            <View style={styles.minicontainer}>
              <Text style={styles.conText}>Steps</Text>
              <View style={styles.conText_container}>
                <Text style={styles.conText}>0/</Text>
                <Text style={styles.conText1}>6000</Text>
              </View>
            </View>
            <View style={styles.minicontainer}>
              <Text style={styles.conText}>Calories</Text>
              <View style={styles.conText_container}>
                <Text style={styles.conText}>0/</Text>
                <Text style={styles.conText1}>{weight} kcal</Text>
              </View>
            </View>
            <View style={styles.minicontainer}>
              <Text style={styles.conText}>Water</Text>
              <View style={styles.conText_container}>
                <Text style={styles.conText}>0/</Text>
                <Text style={styles.conText1}>48</Text>
              </View>
            </View>
          </View>
          <View style={styles.map}>
            <Text style={styles.maptext}>GPS tracking</Text>
          </View>
          <View style={styles.endcontainer}>
            {/* <View style={styles.map}>
              <Text style={styles.maptext}>GPS tracking</Text>
            </View> */}

            <MapView
              ref={mapRef}
              style={StyleSheet.absoluteFill}
              initialRegion={{
                ...curLoc,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}>
              <Marker.Animated ref={markerRef} coordinate={coordinate}>
                <Image
                  source={imagePath.icBike}
                  style={{
                    width: 40,
                    height: 40,
                    transform: [{rotate: `${heading}deg`}],
                  }}
                  resizeMode="contain"
                />
              </Marker.Animated>

              {Object.keys(destinationCords).length > 0 && (
                <Marker
                  coordinate={destinationCords}
                  image={imagePath.icGreenMarker}
                />
              )}

              {Object.keys(destinationCords).length > 0 && (
                <MapViewDirections
                  origin={curLoc}
                  destination={destinationCords}
                  apikey={GOOGLE_MAP_KEY}
                  strokeWidth={6}
                  strokeColor="grey"
                  optimizeWaypoints={true}
                  onStart={params => {
                    console.log(
                      `Started routing between "${params.origin}" and "${params.destination}"`,
                    );
                  }}
                  onReady={result => {
                    console.log(`Distance: ${result.distance} km`);
                    console.log(`Duration: ${result.duration} min.`);
                    fetchTime(result.distance, result.duration),
                      mapRef.current.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                          // right: 30,
                          // bottom: 300,
                          // left: 30,
                          // top: 100,
                        },
                      });
                  }}
                  onError={errorMessage => {
                    // console.log('GOT AN ERROR');
                  }}
                />
              )}
            </MapView>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: '10%',
                right: 0,
              }}
              onPress={onCenter}>
              <Icon
                name="gps-fixed"
                type="materialicons"
                size={30}
                color="#2453ed"
                style={styles.map_icon}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => {
                location();
              }}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Home;
