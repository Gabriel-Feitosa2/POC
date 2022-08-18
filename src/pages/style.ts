import styled from 'styled-components'

export const Resposive = styled.div `
td {
    
}
 @media only screen and (max-width: 900px) {
  table, thead, tbody, th, td, tr {
			display: block;
            
           
		}
		thead tr {
			display: none
		}
    tr {
      
      border-bottom: solid #BDBDBD 1px
    }
      
    tr:nth-child(odd) {}
		td {
		
			border: none;
			position: relative;
			padding-left: 50%;
		}
		td:before {
			
			position: absolute;
			
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}
		
		td:nth-of-type(1):before { content: "Produto"; }
		td:nth-of-type(2):before { content: "Data"; }
		td:nth-of-type(3):before { content: "Preço"; }
		td:nth-of-type(4):before { content: "Volume"; }
		td:nth-of-type(5):before { content: "Vendendor"; }
		td:nth-of-type(6):before { content: "id"; }
		td:nth-of-type(7):before { content: "Carteira"; }
		td:nth-of-type(8):before { content: "Data de entrega"; }
		td:nth-of-type(9):before { content: "Compliance"; }
		td:nth-of-type(10):before { content: "Comercial"; }
        td:nth-of-type(11):before { content: "Contratos"; }
        td:nth-of-type(12):before { content: "ADM"; }
        td:nth-of-type(13):before { content: "DOCS"; }
        td:nth-of-type(14):before { content: "Status"; }
}
`;