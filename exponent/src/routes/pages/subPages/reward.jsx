import styled from "styled-components"
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import React, { useState } from "react";
import Modal from "./rewards/RewardModal";

const Section = styled.section`
  width: 96%;
  height: 100vh;
  margin: 0 auto;
`

export default function Follower() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

  return (
    <Section>
      <div>
        <Link to="/User" className="Back">뒤로</Link>
      </div>
      <div>
        <p>리워드</p>
        <input type="text" />
      </div>
      <div>
        <ol>
            <li>
                <button onClick={openModal}>모달팝업</button>
                <Modal open={modalOpen} close={closeModal} header="Modal heading">
                
                </Modal>
            </li>
            <Button>맨위</Button>
        </ol>
      </div> 
    </Section>
  )
}