"use client"
import React from 'react';
import PropTypes from 'prop-types';
import { redirect } from 'next/navigation';

export default async function Page({params, searchParams}) {
	redirect("/1")


	return <div className='w-9/12 m-auto h-screen'>Home</div>;
}
Page.propTypes = {
	params: PropTypes.object,
	searchParams: PropTypes.object,
};
