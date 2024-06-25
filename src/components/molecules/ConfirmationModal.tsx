import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import Button from '../../../src/components/atoms/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../atoms/Gap';
type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
};

const ConfirmationModal = ({visible, onClose, onConfirm, message}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      testID='modal-container'
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerSection}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose} testID='close-button'>
              <Icon name="close" size={20} color="#888" />
            </TouchableOpacity>
          </View>
          <View style={styles.bodySection}>
            <ScrollView>
              <Text style={styles.messageText}>{message}</Text>
            </ScrollView>
            <Button label="Confirmar" onPress={onConfirm} />
            <Gap height={10} />
            <Button
              label="Cancelar"
              onPress={onClose}
              styles={{backgroundColor: '#DCE1EB'}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 50,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bodySection: {flex: 1, width: '100%', padding: 20},
  modalView: {
    height: '40%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ConfirmationModal;
