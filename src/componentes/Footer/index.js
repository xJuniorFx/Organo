import './Footer.css'

const Footer = () =>{
    return(
        <footer className='footer' >
            <section className='ancoras' >
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank' >
                            <img src="./imagens/fb.png" alt="logo Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank' >
                            <img src="./imagens/tw.png" alt="logo Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href='intagram.com' target='_blank' >
                            <img src="./imagens/ig.png" alt="logo Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className='organo-logo' >
                <img src="/imagens/logo.png" alt='logo Organo' />
            </section>
            <section className='comentario' >
                <p>Desenvolvido por Alura</p>
            </section>
       </footer>
    )
}

export default Footer