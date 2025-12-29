import * as React from "react";
import { graphql } from "gatsby";
import { INode, PageProps } from "@/definitions";
import { Layout, ArticleCard, Container, Hero, Seo } from "@/components";

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="47. Schulball Akademisches Gymnasium Wien" />
      <Hero
        title="1001 NACHT"
        date="22. Mai 2026"
        location="Palais Niederösterreich"
        cover={"@/images/cover.jpg"}
      >
        <p>
          Der 47. Maturaball des Akademischen Gymnasium Wien öffnet am 22. Mai 2026 im Palais Niederösterreich seine Pforten und entführt in die Welt von "1001 Nacht".<br></br> <br></br>
          Wir freuen uns auf ein zahlreiches Kommen und auf ein Wiedersehen 2026.
        </p>
        
        {/* Reservation Button */}
        {
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <a
            href="https://schulball-akg.at/reservation"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#8d271e',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '18px',
              borderRadius: '5px',
              textDecoration: 'none',
            }}
          >
            Karten kaufen
          </a>
        </div>
        }
    
      </Hero>
      <Container>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {posts.map(({ node }: { node: INode }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <li key={node.fields.slug} className="group">
                <ArticleCard
                  link={node.fields.slug}
                  title={title}
                  description={node.frontmatter.description}
                  tags={node.frontmatter.tags}
                />
              </li>
            );
          })}
        </ol>
      </Container>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { type: { eq: "article" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            order
            title
            description
            tags
          }
        }
      }
    }
  }
`;
