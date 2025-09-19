import { S3_URLS, EXTERNAL_URLS } from '@/lib/constants'

export default function Publications() {
  return (
    <main className="min-h-screen bg-background text-foreground">


      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* <div className="mb-12">
          <h1 className="text-3xl font-medium mb-4">Publications & Talks</h1>
          <p className="text-muted-foreground">
            Research contributions and conference presentations in AI and machine learning.
          </p>
        </div> */}

        <div className="space-y-12 lg:space-y-16">
          {/* Publications */}
          <section>
            <h2 className="text-lg lg:text-xl font-medium mb-6 lg:mb-8 underline decoration-2 underline-offset-4">Publications</h2>

            <div className="space-y-8">

              <div>
                <h3 className="font-medium mb-2">From clicks to insights: analysing online customer reviews for handicraft products</h3>
                <p className="text-sm text-muted-foreground mb-3">
                Sonal Singh, Venkata Chaitanya Kanakamedala,  Ravi Teja
                  <br />
                  <em>Technology Analysis and Strategic Management Journal</em>, 2025
                  <br />
                </p>
               
                <div className="flex gap-4 text-sm">
                  <a href={EXTERNAL_URLS.HANDICRAFT_REVIEWS_PAPER} className="text-blue-500 hover:text-blue-400">
                    Paper
                  </a>
        
                </div>
              </div>




              <div>
                <h3 className="font-medium mb-2">Sentiment analysis of online customer reviews for handicraft product using machine learning: a case of Flipkart</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>VC Kanakamedala </strong> , SH Singh, R Talasani
                  <br />
                  <em>International Conference for Advancement in Technology (ICONAT)</em>, 2023
                  <br />
               
                </p>
                {/* <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  We introduce a novel attention architecture that achieves state-of-the-art results on vision-language
                  tasks while using 40% fewer parameters than existing methods. Our approach demonstrates superior
                  performance on VQA, image captioning, and cross-modal retrieval benchmarks.
                </p> */}
                <div className="flex gap-4 text-sm">
                  <a href={EXTERNAL_URLS.SENTIMENT_ANALYSIS_PAPER} className="text-blue-500 hover:text-blue-400">
                    Paper
                  </a>
                  {/* <a href="#" className="text-blue-500 hover:text-blue-400">
                    Code
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-400">
                    Slides
                  </a> */}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Identifying Different Operational Regimes of an Electric Arc Furnace Using Machine Learning Based Alternative Clustering Approaches</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Venkata Chaitanya Kanakamedala </strong> , Allen Chacko Johny, Arya K Bhattacharya, Kumar Chatterjee
                  <br />
                  <em>International Conference on Emerging Techniques in Computational Intelligence (ICETCI)</em>, 2023
                  <br />
              
                </p>
               
                <div className="flex gap-4 text-sm">
                  <a href={EXTERNAL_URLS.ELECTRIC_ARC_FURNACE_PAPER} className="text-blue-500 hover:text-blue-400">
                    Paper
                  </a>
        
                </div>
              </div>

            

            </div>
          </section>

          {/* Talks */}
          <section>
            <h2 className="text-xl font-medium mb-8 underline decoration-2 underline-offset-4">Invited Talks</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-1">Identifying parking demand hotspots and predicting rate surging using machine learning.</h3>
                <p className="text-sm text-muted-foreground mb-2">Urban Transitions Conference 2024• Sitges, Spain • Keynote</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Delivered an oral technical presentation on infrastructure-scale machine learning systems for demand hotspot prediction and surge pricing,
                  deployed to optimize municipal resource allocation.
                </p>
                <div className="flex gap-4 text-sm mt-2">
                  <a href={S3_URLS.URBAN_TRANSITIONS_SLIDES} className="text-blue-500 hover:text-blue-400">
                    📄 Slides
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Advancing agriculture communication network in Virginia through a secure web platform “Ag Corp”</h3>
                <p className="text-sm text-muted-foreground mb-2">National Agricultural Producers Data Cooperative (NAPDC) 2024 • University of Nebraska-Lincoln</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Presented Ag Corp: Advancing Agriculture Communication in Virginia, a secure web platform integrating centralized information, real-time updates to deliver support for producers.
                </p>
                <div className="flex gap-4 text-sm mt-2">
                  <a href={S3_URLS.AGTECH_SLIDES} className="text-blue-500 hover:text-blue-400">
                    📄 Slides
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">The current state of AI in Transportation through the lens of Topic Modeling</h3>
                <p className="text-sm text-muted-foreground mb-2">AI Expo for National Competitiveness 2024 • Washington, D.C.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Exhibited computer vision, topic modeling, and LLM-driven research workflows at a national AI showcase, presenting scalable technical
                  solutions with direct impact on policy and industry adoption.
                </p>
                <div className="flex gap-4 text-sm mt-2">
                  <a href={S3_URLS.AI_EXPO_SLIDES} className="text-blue-500 hover:text-blue-400">
                    📄 Slides
                  </a>
                </div>
              </div>

           
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
