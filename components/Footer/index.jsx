"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-6 border-t border-secondary/20 flex items-center justify-center"
        >
            <div className="text-center">
                <div className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
                    <span>© {new Date().getFullYear()}</span>
                    <span>•</span>
                    <span>Own by oknuzay</span>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
