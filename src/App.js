import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function App() {

  

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!a || !b || !c) {
      setError('Por favor, ingrese todos los campos');
      return;
    }

    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
      setError('La ecuación no tiene soluciones reales');
      return;
    }

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    setResult({ x1, x2 });
    setError(null);
  };

  return (

    

    <div className="container">

<img src='https://th.bing.com/th/id/OIP.BpjakTDxzBgbY8u9uZ1F9wHaEK?rs=1&pid=ImgDetMain' alt='formula' />

      <h2 class="text-secondary" className="text-center mt-5">Fórmula Cuadrática</h2>
      <h3>  ingrese los valores de las variables en orden </h3>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group controlId="formA">
          <Form.Label>Ingrese el valor de a:  </Form.Label>
          <Form.Control
            type="number"
            placeholder="              valor de a"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
          />
        </Form.Group>
        <h2>  </h2>
        <Form.Group controlId="formB">
          <Form.Label>Ingrese el valor de b:    </Form.Label>
          <Form.Control
            type="number"
            placeholder="              valor de b"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />
        </Form.Group>

        <h2>  </h2>
        <Form.Group controlId="formC">
          <Form.Label>Ingrese el valor de c:    </Form.Label>
          <Form.Control
            type="number"
            placeholder="              valor de c"
            value={c}
            onChange={(e) => setC(parseFloat(e.target.value))}
          />
        </Form.Group>
        
        
<h3>      </h3>

        <Button variant="secondary" type="submit">
          Calcular formula
        </Button>

 <h3>Solucion:  </h3>

      </Form>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {result && (
        <Alert variant="success" className="mt-3">
          Las soluciones son: x1 = {result.x1.toFixed(2)} y x2 = {result.x2.toFixed(2)}
        </Alert>

           
      )}

      
    </div>

    
  );


}

export default App;

