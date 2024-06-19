import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Badge from './components/Badge';
import appStyles from '../assets/themes/Styles';
import colors from '../assets/themes/Colors';
import Icon from 'react-native-vector-icons/Entypo';


const compassImg = require('../assets/compass.png');
const tagImg = require('../assets/tag.png');
const lightningImg = require('../assets/lightningBolt.png');


const BadgesPage = () => {
  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <TouchableOpacity style={appStyles.backButton}
        //onPress={() => navigation.goBack()} 
        >
          <Icon name="chevron-left" size={30} color={colors.accent} />
        </TouchableOpacity>
        <Text style={styles.text}>my badges</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Badge
          title="Adventure Seeker"
          description="Complete 5 Ventures"
          image={compassImg}
        />
        <Badge
          title="Outdoor Enthusiast"
          description="Complete 10 Ventures"
          image={compassImg}
        />
        <Badge
          title="True Adventurer"
          description="Complete 30 Ventures"
          image={compassImg}
        />
        <Badge
          title="Rookie Redeemer"
          description="Use 1 coupon"
          image={tagImg}
        />
        <Badge
          title="Coupon Collector"
          description="Use 3 coupons"
          image={tagImg}
        />
        <Badge
          title="Savings Master"
          description="Use 5 coupons"
          image={tagImg}
        />
        <Badge
          title="Consistent"
          description="Maintain a 7-day streak"
          image={lightningImg}
        />
        <Badge
          title="Dedicated"
          description="Maintain a 14-day streak"
          image={lightningImg}
        />
        <Badge
          title="Devoted"
          description="Maintain a 30-day streak"
          image={lightningImg}
        />
      </View>


    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 24,
    marginTop: 65
  },
});

export default BadgesPage;
