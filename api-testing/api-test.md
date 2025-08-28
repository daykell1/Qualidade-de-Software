 # Testes de API (ex.: coleções Postman, etc.)


 # 🐱 Teste de API - Cat Facts

## 🎯 Objetivo
Validar que a API **Cat Facts** retorna corretamente fatos aleatórios sobre gatos em formato JSON.

---

## 🔗 Endpoint
`GET https://catfact.ninja/fact`

---

## ✅ Cenários de Teste

1. **Status code 200**  
   - Verificar se a API responde com código **200 OK**.  
   - Resultado: **PASS**  

2. **Resposta contém um fato**  
   - Validar que a resposta contém um objeto JSON com o campo `fact`.  
   - Resultado: **PASS**  

---

## 📊 Exemplo de Resposta
```json
{
  "fact": "Cats have five toes on their front paws, but only four on their back paws.",
  "length": 72
}
