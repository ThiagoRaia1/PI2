import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import MenuInferior from "../../components/MenuInferior";
import BotaoLogout from "../../components/BotaoLogout";
import { useAuth } from "../../../context/auth";
import { useState } from "react";

export default function Perfil() {
  const { usuario, handleLogin, setUsuario } = useAuth();
  const [backupUsuario, setBackupUsuario] = useState(usuario)
  const [editando, setEditando] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee",
          gap: 10,
          padding: 20,
        }}
      >
        {!editando ? (
          <>
            <BotaoLogout />
            <View style={{ flex: 1, justifyContent: "center", gap: 30 }}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nome</Text>
                <Text style={styles.inputText}>{usuario.nome || "NOME"}</Text>
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>CPF</Text>
                <Text style={styles.inputText}>{usuario.cpf || "CPF"}</Text>
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>SEXO</Text>
                <Text style={styles.inputText}>{usuario.sexo || "SEXO"}</Text>
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>CELULAR</Text>
                <Text style={styles.inputText}>
                  {usuario.celular || "CELULAR"}
                </Text>
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>DATA DE NASCIMENTO</Text>
                <Text style={styles.inputText}>
                  {usuario.dataNascimento?.toISOString() ||
                    "DATA DE NASCIMENTO"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.editarsalvarButton}
              onPress={() => setEditando(!editando)}
            >
              <Text style={styles.editarsalvarButtonText}>Editar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={{ flex: 1, justifyContent: "center", gap: 30 }}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Digite seu email"
                  placeholderTextColor="#aaa"
                  value={usuario.login}
                  onChangeText={(text) =>
                    setUsuario({ ...usuario, login: text })
                  }
                  keyboardType="email-address"
                  returnKeyType="next"
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.editarsalvarButton}
              onPress={() => setEditando(!editando)}
            >
              <Text style={styles.editarsalvarButtonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.editarsalvarButton, {backgroundColor: "#ff6154"}]}
              onPress={() => setEditando(!editando)}
            >
              <Text style={styles.editarsalvarButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <MenuInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 500,
    color: "#444",
    marginBottom: 6,
  },
  inputGroup: {
    width: "100%",
  },
  inputText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#2AA69F",
    height: 40,
    paddingHorizontal: 10,
    alignContent: "center",
  },
  editarsalvarButton: {
    backgroundColor: "#2aa69f",
    height: "5%",
    justifyContent: "center",
    borderRadius: 20,
  },
  editarsalvarButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: 600,
  },
});
