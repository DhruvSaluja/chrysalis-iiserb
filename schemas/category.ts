import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'category',
    title: 'Category',
    icon: UserIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),           
        }), 
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
          }),
        

    ]

})