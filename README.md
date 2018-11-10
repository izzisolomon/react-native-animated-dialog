# react-native-sliding-drawer

A dialog component for your react-native application.

To Download, run: yarn add react-native-popup-dialog, or npm install -s react-native-popup-dialog.

Sample Usage:

    import Dialog from "react-native-popup-dialog";

    openDialog = () {
      this.setState({ open: true});
    }

    closeDialog= () {
      this.setState({ open: false});
    }


    render () {
      let myLayout = (
        <View>
          // this is what will be displayed inside the dialog
        </View>
    )
      return (
          <Dialog
           open={this.state.open}
           layout={myLayout}
           closeOnTapOutside={false}   //Default is true
           />
      )
    }

By default, the dialog comes up from the bottom. You can add the prop modern={true} to change the animation.

Regular animation

![](demo2.gif)

modern

![](demo.gif)
