import React, { useEffect } from 'react';

export default function Sair({ navigation }) {
  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'LOGIN' }],
    });
  }, []);

  return null;
}