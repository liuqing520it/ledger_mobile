# iconFont使用优化

### 1.为什么要使用iconFont, 它有哪些优缺点
> 优点
> * 属于文字(不是图片)使用方便与Image比起来有天然的优势
> * 因为它们是矢量图形，所以它们是可伸缩的。这意味着我们可以在不降低质量的情况下伸缩它们。
> * 尺寸小加载速度快


> 缺点
> * 不能用来显示复杂图像
> * 通常只限于一种颜色, 颜色单一


### 2.目前项目的使用现状
##### 摘取一段代码
```javascript
import React,{Component,} from 'react';
import {Text,} from 'react-native';
import PropTypes from 'prop-types';
export default class Icon extends Component {
  constructor(props){
    super(props);
  }
  render () {
    var {style,size,type,color} = this.props;

    var styles = [style,{backgroundColor:'transparent',fontFamily:'fontcustom',fontSize:size,color}];

    switch (type) {
      case 'ticket_notstart':
        return (
          <Text style={styles}>&#xf170;</Text>
        );
      case 'ticket_processing':
        return (
          <Text style={styles}>&#xf171;</Text>
        );
      case 'ticket_finished':
        return (
          <Text style={styles}>&#xf16f;</Text>
        );
      case 'arrow_right':
        return (
          <Text style={styles}>&#xf104;</Text>
        );
      case 'arrow_location':
        return (
          <Text style={styles}>&#xf11f;</Text>
        );
      case 'icon_login_pass':
        return (
          <Text style={styles}>&#xf201;</Text>
        );
      case 'icon_write_log':
        return (
          <Text style={styles}>&#xf208;</Text>
        );
      case 'icon_device':
        return (
          <Text style={styles}>&#xf113;</Text>
        );
      case 'icon_device_box':
        return (
          <Text style={styles}>&#xf114;</Text>
        );
      case 'icon_panel':
        return (
          <Text style={styles}>&#xf126;</Text>
        );
      case 'icon_panel_box':
        return (
          <Text style={styles}>&#xf127;</Text>
        );
      case 'icon_building':
        return (
          <Text style={styles}>&#xf10a;</Text>
        );
      case 'icon_room':
        return (
          <Text style={styles}>&#xf12b;</Text>
        );
      case 'icon_power_dis_box':
        return (
          <Text style={styles}>&#xf287;</Text>
        );
      case 'icon_power_dis_box_online'://带尾巴
        return (
          <Text style={styles}>&#xf288;</Text>
        );
      case 'icon_floor'://带尾巴
        return (
          <Text style={styles}>&#xf289;</Text>
        );
      case 'photo':
        return (
          <Text style={styles}>&#xf128;</Text>
        );
      case 'camera':
        return (
          <Text style={styles}>&#xf265;</Text>
        );
      case 'icon_scan':
        return (
          <Text style={styles}>&#xf13d;</Text>
        );
      case 'icon_bind':
        return (
          <Text style={styles}>&#xf198;</Text>
        );
      case 'icon_add':
        return (
          <Text style={styles}>&#xf100;</Text>
        );
      case 'icon_check':
        return (
          <Text style={styles}>&#xf161;</Text>
        );
      case 'icon_document':
        return (
          <Text style={styles}>&#xf16e;</Text>
        );
      case 'icon_select':
        return (
          <Text style={styles}>&#xf16a;</Text>
        );
      case 'icon_unselect':
        return (
          <Text style={styles}>&#xf10d;</Text>
        );
      case 'icon_arrow_down':
        return (
          <Text style={styles}>&#xf102;</Text>
        );
      case 'icon_arrow_up':
        return (
          <Text style={styles}>&#xf106;</Text>
        );
      case 'icon_person':
        return (
          <Text style={styles}>&#xf111;</Text>
        );
      case 'icon_sync':
        return (
          <Text style={styles} >&#xf167;</Text>
        );
      case 'icon_success':
        return (
          <Text style={styles} >&#xf18e;</Text>
        );
      case 'icon_schneider_en':
        return (
          <Text style={styles}>&#xf146;</Text>
        )
      case 'icon_date':
        return (
          <Text style={styles}>&#xf149;</Text>
        )
      case 'icon_arrow_left':
        return (
          <Text style={styles}>&#xf103;</Text>
        )
      case 'icon_arrow_right':
        return (
          <Text style={styles}>&#xf104;</Text>
        )
      case 'icon_arrow_fold':
        return (
          <Text style={styles}>&#xf183;</Text>
        )
      case 'icon_arrow_unfold':
        return (
          <Text style={styles}>&#xf184;</Text>
        )
      case 'icon_info':
        return (
          <Text style={styles}>&#xf193;</Text>
        );
      case 'icon_info_down':
        return (
          <Text style={styles}>&#xf1f6;</Text>
        );
      case 'icon_info_empty':
        return (
          <Text style={styles}>&#xf227;</Text>
        );
      case 'icon_arrow_up':
        return (
          <Text style={styles}>&#xf106;</Text>
        )
      case 'icon_arrow_down':
        return (
          <Text style={styles}>&#xf102;</Text>
        )
      case 'icon_over_due':
        return (
          <Text style={styles}>&#xf186;</Text>
        )
      case 'icon_alarm_ticket':
        return (
          <Text style={styles}>&#xf187;</Text>
        )
      case 'icon_round':
        return (
          <Text style={styles}>&#xf22c;</Text>
        )
      case 'icon_healthy_indica':
        return (
          <Text style={styles}>&#xf22d;</Text>
        )
      case 'icon_close':
        return (
          <Text style={styles}>&#xf21b;</Text>
        )
      case 'icon_more':
        return (
          <Text style={styles}>&#xf195;</Text>
        );
      case 'icon_asset_folder':
        return (
          <Text style={styles}>&#xf21d;</Text>
        );
      case 'icon_asset_expand':
        return (
          <Text style={styles}>&#xf212;</Text>
        );
      case 'icon_asset_add':
        return (
          <Text style={styles}>&#xf210;</Text>
        );
      case 'icon_asset_customer':
        return (
          <Text style={styles}>&#xf111;</Text>
        );
      case 'icon_administration':
        return (
          <Text style={styles}>&#xf1b5;</Text>
        );
      case 'icon_asset_location':
        return (
          <Text style={styles}>&#xf1ab;</Text>
        );
      case 'icon_no_data':
        return (
          <Text style={styles}>&#xf20a;</Text>
        );
      case 'icon_mail':
        return (
          <Text style={styles}>&#xf1ba;</Text>
        );
      case 'icon_phone':
        return (
          <Text style={styles}>&#xf200;</Text>
        );
      case 'icon_ticket_msg':
        return (
          <Text style={styles}>&#xf268;</Text>
        );
      case 'icon_ticket_log':
        return (
          <Text style={styles}>&#xf244;</Text>
        );
      case 'icon_asset_bus_system':
        return (
          <Text style={styles}>&#xf26c;</Text>
        );
      case 'icon_asset_function_unit_group':
        return (
          <Text style={styles}>&#xf26a;</Text>
        );
      case 'icon_asset_socket_box':
        return (
          <Text style={styles}>&#xf26b;</Text>
        );
      case 'icon_runtime_status_fail':
        return (
          <Text style={styles}>&#xf18d;</Text>
        );
      case 'icon_runtime_status_ok':
        return (
          <Text style={styles}>&#xf18e;</Text>
        );
      case 'icon_runtime_conn':
        return (
          <Text style={styles}>&#xf162;</Text>
        );
      case 'icon_runtime_disconn':
        return (
          <Text style={styles}>&#xf163;</Text>
        );
      case 'icon_runtime_closed':
        return (
          <Text style={styles}>&#xf10b;</Text>
        );
      case 'icon_runtime_open':
        return (
          <Text style={styles}>&#xf10c;</Text>
        );

      case 'icon_ticket_tag':
        return (
          <Text style={styles}>&#xf1c9;</Text>
        )
      case 'icon_search':
        return (
          <Text style={styles}>&#xf12c;</Text>
        );
      case 'icon_download':
        return (
          <Text style={styles}>&#xf19f;</Text>
        );
      case 'icon_asset_loop':
        return (
          <Text style={styles}>&#xf275;</Text>
        );
      case 'icon_box_loop':
        return (
          <Text style={styles}>&#xf276;</Text>
        );
      case 'icon_circle_add':
        return (
          <Text style={styles}>&#xf241;</Text>
        );
      case 'icon_edit_pencil':
        return (
          <Text style={styles}>&#xf142;</Text>
        );
      case 'icon_del':
        return (
          <Text style={styles}>&#xf112;</Text>
        );
      case 'icon_add2':
        return (
          <Text style={styles}>&#xf119;</Text>
        );
    }
    return null;
  }
}

Icon.propTypes = {
  type:PropTypes.string.isRequired,
  color:PropTypes.string.isRequired,
  size:PropTypes.number.isRequired,
  style:PropTypes.any
};

```
> * 不方便(每次新增icon都要在对应的switch下面加一个case,一次新增100个icon要拷贝100次)
> * 开发效率太低


### 针对以上优化, 换一种方式提高开发效率

```javascript

import React from 'react';
import {
  Pressable,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

import IconMap from './IconMap';
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
      <Text style={iconStyle}>{IconMap(iconName)}</Text>
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

```

如何找到对应的icon名字对应的unicode呢?

通过脚本映射

具体步骤
1. 阿里官网添加需要的图片,点击下载到本地
![e4ff6480844a2f6e221c09d6e6fe0bff.jpg](..%2F..%2FLibrary%2FContainers%2Fcom.tencent.xinWeChat%2FData%2FLibrary%2FCaches%2Fcom.tencent.xinWeChat%2F2.0b4.0.9%2Fd3524b7df1e0d737fc8c6db7e541280c%2FNoteDragTmp%2F1701705954%2Fe4ff6480844a2f6e221c09d6e6fe0bff.jpg)
2. 打开压缩包,里面有一堆的.json .ttf .js .css等文件
![cacb5b41b8e564a540f2205da9750cdd.jpg](..%2F..%2FLibrary%2FContainers%2Fcom.tencent.xinWeChat%2FData%2FLibrary%2FCaches%2Fcom.tencent.xinWeChat%2F2.0b4.0.9%2Fd3524b7df1e0d737fc8c6db7e541280c%2FNoteDragTmp%2F1701705970%2Fcacb5b41b8e564a540f2205da9750cdd.jpg)
3. 执行脚本文件 python FontConversion.py iconfont.ttf IconMap.ts
4. 完成之后会得到一个映射Map
5. 每次新增icon重新执行一下FontConversion脚本, 映射文件相应的会更新,不用增加任何代码
```typescript

const iconFontMap = {
"xuanzhong":"58893",
"not_Selected-copy":"58917",
"iconfontjiantou5":"58933",
"xianshimima":"58954",
"yincangmima":"58955",
};

export default function IconMap(name: string) {
    // @ts-ignore
    return String.fromCharCode(iconFontMap[name])
}

```

>使用示例
 
```javascript
<Icon name={"xianshimima"}
      size={45}
      color={"red"}
      onPress={() => Alert.alert("123")} />
```



