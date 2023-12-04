import React from 'react';
import {
  Pressable,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

import IconFont from './IconFont';
import Colors from "../color/Colors";

export interface IconProps {
  /**
   * icon名称
   */
  name: string,
  /**
   * icon 大小
   * @default 24
   */
  size?: number,
  /**
   * icon 颜色
   * @default gray light
   */
  color?: string,
  /**
   * 背景颜色
   * @default white
   */
  backgroundColor?: string,
  /**
   * icon点击回调
   */
  onPress?: () => void,
  /**
   * 是否不可点击
   * @default false;  true 不可用点击无效果  false: 可用
   */
  disabled?: boolean,
}

export function Icon(props: IconProps) {
  let iconOnPres = props.onPress;
  let disabled = props.disabled;
  let iconName = props.name;
  let iconStyle: StyleProp<TextStyle> = {
    fontFamily: 'iconfont',
    fontSize: props.size,
    color: props.color,
    textAlign: 'center',
  };

  let containerStyle : StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: props.backgroundColor,
    padding: 3,
  };

  return (
    <Pressable style={containerStyle}
               onPress={iconOnPres}
               disabled={disabled}>
      <Text style={iconStyle}>{IconFont(iconName)}</Text>
    </Pressable>
  );
}

/**
 * 设置默认属性
 */
Icon.defaultProps = {
  size: 24,
  color: Colors.black,
  backgroundColor: Colors.transparent,
  disabled: false,
};


