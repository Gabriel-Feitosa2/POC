import styled from 'styled-components'

export const Resposive = styled.div `
 @media only screen and (max-width: 900px) {
  
  table, thead, tbody, th, td, tr {
			display: block;
            
		}

		/* Hide table headers (but not display: none;, for accessibility) */
		thead tr {
			display: none
		}

    tr {
      margin: 0 0 1rem 0;
      border-bottom: solid #BDBDBD 1px
    }
      
    tr:nth-child(odd) {}
    
		td {
			/* Behave  like a "row" */
			border: none;
			position: relative;
			padding-left: 50%;
		}

		td:before {
			/* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}

		/*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
		*/
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
        td:nth-of-type(12):before { content: "Status"; }
}
`;