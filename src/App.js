import './App.css';
import {Container, Col, Row} from 'react-bootstrap'
import ContactForm from './component/ContactForm'
import ContactList from './component/ContactList'
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. 왼쪽에 연락처 등록 폼, 오른쪽은 등록된 연락처 리스트
// 2. 리스트에 유저 이름과 전화번호 추가
// 3. 리스트에 아이템 개수 출력
// 4. 사용자는 이름검색을 통해 연락처를 찾을 수 있다.

function App() {
  return (
    <div>
      <h1 className='title'>Phone Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
