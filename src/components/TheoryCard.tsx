'use client'

import { useState } from 'react'

interface Theory {
  id: string
  title: string
  description: string
  content: any
}

interface TheoryCardProps {
  theory: Theory
  isExpanded: boolean
  onRead: () => void
  isRead: boolean
}

export default function TheoryCard({ theory, isExpanded, onRead, isRead }: TheoryCardProps) {
  const [hasBeenRead, setHasBeenRead] = useState(false)

  const handleMarkAsRead = () => {
    if (!hasBeenRead) {
      setHasBeenRead(true)
      onRead()
    }
  }

  const renderContent = () => {
    const content = theory.content

    // Handle different content structures based on theory type
    switch (theory.id) {
      case 'mintzberg':
        return (
          <div className="space-y-6">
            {content.categories?.map((category: any, index: number) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-blue-700">{category.name}</h4>
                <div className="grid gap-3">
                  {category.roles?.map((role: any, roleIndex: number) => (
                    <div key={roleIndex} className="bg-white p-3 rounded border-l-4 border-blue-400">
                      <h5 className="font-medium text-gray-800">{role.name}</h5>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {content.sportExample && (
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">🏆 Sportvoorbeeld</h4>
                <p className="text-green-700">{content.sportExample}</p>
              </div>
            )}
          </div>
        )

      case 'hersey-blanchard':
        return (
          <div className="space-y-6">
            {content.introduction && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">{content.introduction.title}</h4>
                <p className="text-blue-700 mb-2">{content.introduction.description}</p>
                <p className="text-blue-600 font-medium italic">{content.introduction.keyInsight}</p>
              </div>
            )}

            {content.coreModel && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">{content.coreModel.title}</h4>
                <p className="text-gray-700 mb-3">{content.coreModel.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {content.coreModel.dimensions?.map((dimension: any, index: number) => (
                    <div key={index} className="bg-white p-3 rounded border">
                      <h5 className="font-medium text-gray-800 mb-2">{dimension.name}</h5>
                      <p className="text-gray-600 text-sm mb-2">{dimension.description}</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {dimension.characteristics?.map((char: string, charIndex: number) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.developmentLevels && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Ontwikkelingsniveaus</h4>
                {content.developmentLevels.map((level: any, index: number) => (
                  <div key={index} className="bg-white border rounded-lg p-4">
                    <h5 className="font-semibold text-purple-700 mb-2">{level.level}</h5>
                    <div className="grid md:grid-cols-2 gap-2 mb-3">
                      <div><span className="font-medium">Competentie:</span> {level.competence}</div>
                      <div><span className="font-medium">Betrokkenheid:</span> {level.commitment}</div>
                    </div>
                    <div className="mb-3">
                      <h6 className="font-medium mb-1">Kenmerken:</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {level.characteristics?.map((char: string, charIndex: number) => (
                          <li key={charIndex}>• {char}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3">
                      <h6 className="font-medium mb-1">Behoeften:</h6>
                      <p className="text-sm text-gray-600">{level.needs}</p>
                    </div>
                    {level.sportExample && (
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <h6 className="font-medium text-green-800 mb-1">🏆 Sportvoorbeeld</h6>
                        <p className="text-green-700 text-sm">{level.sportExample}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {content.leadershipStyles && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Leiderschapsstijlen</h4>
                {content.leadershipStyles.map((style: any, index: number) => (
                  <div key={index} className="bg-white border rounded-lg p-4">
                    <h5 className="font-semibold text-orange-700 mb-2">{style.style}</h5>
                    <div className="mb-3">
                      <span className="font-medium">Gedrag:</span> {style.behavior}
                    </div>
                    <div className="mb-3">
                      <span className="font-medium">Wanneer:</span> {style.when}
                    </div>
                    <p className="text-gray-600 mb-3">{style.description}</p>
                    <div className="mb-3">
                      <h6 className="font-medium mb-1">Aanpak:</h6>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {style.approach?.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    {style.sportExample && (
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <h6 className="font-medium text-green-800 mb-1">🏆 Sportvoorbeeld</h6>
                        <p className="text-green-700 text-sm">{style.sportExample}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {content.keyPrinciples && (
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">🔑 Kernprincipes</h4>
                <ul className="text-yellow-700 space-y-1">
                  {content.keyPrinciples.map((principle: string, index: number) => (
                    <li key={index}>• {principle}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )

      default:
        // Generic content renderer for other theories
        return (
          <div className="space-y-6">
            {Object.entries(content).map(([key, value]: [string, any]) => {
              if (typeof value === 'string') {
                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                    <p className="text-gray-700">{value}</p>
                  </div>
                )
              }
              
              if (Array.isArray(value)) {
                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                    <div className="space-y-2">
                      {value.map((item: any, index: number) => (
                        <div key={index} className="bg-white p-3 rounded border">
                          {typeof item === 'string' ? (
                            <p className="text-gray-700">{item}</p>
                          ) : (
                            <div>
                              {item.name && <h5 className="font-medium text-gray-800 mb-1">{item.name}</h5>}
                              {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                              {item.sportExample && (
                                <div className="bg-green-50 p-2 rounded mt-2 border-l-4 border-green-400">
                                  <p className="text-green-700 text-sm">🏆 {item.sportExample}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }

              if (typeof value === 'object' && value !== null) {
                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                    <div className="space-y-2">
                      {Object.entries(value).map(([subKey, subValue]: [string, any]) => (
                        <div key={subKey} className="bg-white p-3 rounded border">
                          <h5 className="font-medium text-gray-800 mb-1 capitalize">{subKey.replace(/([A-Z])/g, ' $1')}</h5>
                          {typeof subValue === 'string' ? (
                            <p className="text-gray-600 text-sm">{subValue}</p>
                          ) : Array.isArray(subValue) ? (
                            <ul className="text-gray-600 text-sm space-y-1">
                              {subValue.map((item: any, index: number) => (
                                <li key={index}>• {typeof item === 'string' ? item : item.description || JSON.stringify(item)}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600 text-sm">{JSON.stringify(subValue)}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }

              return null
            })}
          </div>
        )
    }
  }

  if (!isExpanded) {
    return (
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 cursor-pointer relative">
        {isRead && (
          <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            ✓
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{theory.title}</h3>
        <p className="text-gray-600 mb-4">{theory.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-medium">Klik om te lezen →</span>
          {!isRead && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              +50 punten
            </span>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{theory.title}</h2>
        {!isRead && !hasBeenRead && (
          <button
            onClick={handleMarkAsRead}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            ✓ Markeer als gelezen (+50 punten)
          </button>
        )}
        {(isRead || hasBeenRead) && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
            ✓ Gelezen
          </div>
        )}
      </div>
      
      <p className="text-gray-600 mb-6 text-lg">{theory.description}</p>
      
      <div className="prose max-w-none">
        {renderContent()}
      </div>
    </div>
  )
}