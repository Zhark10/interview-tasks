const familyTree = {
  name: "Ivan",
  gender: "male",
  parents: [
      {
          name: "Stepan",
          gender: "male",
          parents: [
              {
                  name: "Sergey",
                  gender: "male",
                  parents: [
                      {
                          name: "Alexey",
                          gender: "male",
                          parents: [
                              {
                                  name: "Max",
                                  gender: "male",
                                  parents: null,
                              },
                              {
                                  name: "Mira",
                                  gender: "female",
                                  parents: null,
                              },
                          ],
                      },
                  ]
              },
          ]
      },
      {
          name: "Marina",
          gender: "female",
          parents: [
              {
                  name: "Yuri",
                  gender: "male",
                  parents: null,
              },
              {
                  name: "Vika",
                  gender: "female",
                  parents: [
                      {
                          name: "Vladimir",
                          gender: "male",
                          parents: null,
                      },
                      {
                          name: "Nika",
                          gender: "female",
                          parents: null,
                      },
                  ],
              },
          ]
      },
  ]
}

const result = [] // {name, generation}
function getInfoByTree(tree, generationLvl = 1) {
  const person = tree
  result.push({ name: person.name, generation: generationLvl })
  if (!person.parents) return
  for (let parent of person.parents) {
      getInfoByTree(parent, generationLvl + 1)
  }
}

getInfoByTree(familyTree)
console.log(result)

