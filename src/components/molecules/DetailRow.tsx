import { StyleSheet, Text, View } from "react-native";

export const DetailRow = ({ label, value }:{label:string, value:string}) => (
    <View
      style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      },
      label:{ fontSize: 14, fontWeight: '600' },
      value:{ fontSize: 14, fontWeight: '300' },
      
  });