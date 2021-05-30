import Factory from '@ioc:Adonis/Lucid/Factory'
import Accordion from 'App/Models/Accordion'

export const AccordionFactory = Factory
    .define(Accordion, ({ faker }) => {
        let name = faker.name
        return {
            title: name,
        }
    }).build()
