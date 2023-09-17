import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {SvgCssUri} from 'react-native-svg';
import images from '../../assets/images';
import {VALIDATION_REGEX, hp, wp} from '../../util/helper';
import theme from '../../util/theme';
import Spacing from '../Spacing';
import Text from '../Text/index';

const UserItem = ({name, email, uri, subTittle, isOnline, isAvatar}) => (
  <Pressable style={{padding: 5}}>
    <View style={styles.container}>
      <View>
        {isAvatar ? (
          uri?.toLowerCase()?.includes('svg') ? (
            <SvgCssUri
              style={[styles.image, {backgroundColor: 'transparent'}]}
              uri={uri}
            />
          ) : (
            <Image
              source={
                !VALIDATION_REGEX?.isImageType.test(uri)
                  ? images.ic_userprofile
                  : {uri: uri}
              }
              style={styles.image}
            />
          )
        ) : (
          <View
            style={[
              styles.image,
              {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.brandColor.lightestBlue,
              },
            ]}>
            <Text>{name?.slice(0, 2)?.toUpperCase()}</Text>
          </View>
        )}
        <View
          style={[
            styles.badgeContainer,
            {
              backgroundColor: isOnline
                ? theme.colors.brandColor.green
                : theme.colors.brandColor.silver,
            },
          ]}
        />
      </View>
      <Spacing direction="y" size="xs" />
      <View style={styles.rightContainer}>
        <Text type={'body2'} weight={theme.typography.fontWeights.medium}>
          {name}
        </Text>
        <Text type={'caption12'} numberOfLines={1}>
          {email}
        </Text>
      </View>
    </View>
    {subTittle && (
      <Text
        type={'caption12'}
        size={'xxs'}
        style={styles.subTittle}
        numberOfLines={1}>
        {subTittle}
      </Text>
    )}
  </Pressable>
);

export default UserItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: theme.sizes.image.xl4,
    width: theme.sizes.image.xl4,
    borderRadius: theme.sizes.image.xl4 / 2,
    marginRight: 10,
  },
  badgeContainer: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.brandColor.green,
    position: 'absolute',
    bottom: hp(0.1),
    right: wp(2.7),
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  subTittle: {
    marginTop: theme.sizes.spacing.xs2,
  },
});
